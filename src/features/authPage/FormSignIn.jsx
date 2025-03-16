import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css"

export default function FormSignIn() {
    
    const navigate = useNavigate();
    const [form, setForm] = useState({email: '', password: ''})
    

    
    async function send(e, form) {
        e.preventDefault()
        try {
          const {email, password} = form
    
          const response = await fetch("http://localhost:8084/auth/sign-in-mail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
    
          if (!response.ok) throw new Error(response.status);
          
          const data = await response.json();
          navigate("/profile");
        } catch (error) {
          
          console.error(error);
        }
      }




    return (
        <form className="form" action="">
            <div className={styles.inputContainer}>
                <label htmlFor="email" className={styles.inputLabel}>USERNAME</label>
                <input 
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})} 
                    type="text" 
                    id="email"/>
                <label htmlFor="password" className={styles.inputLabel}>PASSWORD</label>
                <input 
                id="password"
                value={form.password}
                onChange={e => setForm({...form, password: e.target.value})} 
                type="password" />
            </div>
            <div className={styles.signInBtn}>
                <button onClick={(e) => send(e, form)}>SIGN IN</button>
            </div>
        </form>
    )
}