import React from "react";
import "./signin.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Verification = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("")
  const navigate = useNavigate(); 

  function handleCodeChange(event) {
    setCode(event.target.value);
  }
  
  async function send(e) {
    e.preventDefault()
    try {
      
      const response = await fetch("http://localhost:8084/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email, code}),
      });
      console.log(response)

      if (!response.ok) throw new Error(response.status);

      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/profile")
    } catch (error) {
      console.error(code, error);
    }
  }

  return (
    <div className="mmain">
    <div className="cover-container">
        <h1>Verification</h1>
      <div className="main-container">
        <div className="logo-container">
          <img src="images/image.png" alt="" />
        </div>

        <div className="form-container">
          <div className="form-header">
            <div className="bilimber">
              <h2>BilimBer</h2>
            </div>
            <div className="signin-signup">
              <p>
                <Link to="/signup">Sign Up</Link>  
              </p>
              <p>
                <Link to="/signin">Sign In</Link>   
              </p>
            </div>
          </div>

          <div className="input-button-container">
            <form className="form" action="">
              <div className="input-container">
                <label className="input-label">USERNAME</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="USERNAME"
                />
                <input
                  value={code}
                  onChange={handleCodeChange}
                  type="USERNAME"
                />
               
              </div>
              <div className="sign-in-btn">
                <button onClick={send}>SIGN UP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Verification;
