import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css"

export default function FormSignUp() {
    
    const navigate = useNavigate(); 
    const [form, setForm] = useState({username: '', email: '', password: '', confirmPassword: ''})


    async function send(form) {
    
        try {
          const {username, email, password} = form
    
          const response = await fetch("http://localhost:8084/auth/sign-up", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
          });
    
          if (!response.ok) throw new Error(response.status);
          
          const data = await response.json();
          navigate("/verification");
        } catch (error) {
          
          console.error(error);
        }
      }


    return (
        <form className="form" action="">
              <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>USERNAME</label>
                <input
                  value={form.username}
                  onChange={e => setForm({...form, username: e.target.value})}
                  type="USERNAME"
                />
                <label className={styles.inputLabel}>EMAIL</label>
                <input
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  type="email"
                />
                <label className={styles.inputLabel}>PASSWORD</label>
                <input
                  value={form.password}
                  onChange={e => setForm({...form, password: e.target.value})}
                  type="password"
                />
                <label className={styles.inputLabel}>CONFIRM PASSWORD</label>
                <input
                  value={form.confirmPassword}
                  onChange={e => setForm({...form, confirmPassword: e.target.value})}
                  type="password"
                />
              </div>
              <div className={styles.signInBtn}>
                <button onClick={() => send(form)}>SIGN UP</button>
              </div>
        </form>
    )
}