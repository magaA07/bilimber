import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.png";
import FormSignUp from "./FormSignUp";
import styles from "./Auth.module.css"

const SignUp = () => {


  
  return (
    <div className={styles.main}>
      <div className={styles.coverContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.logoContainer}>
            <img src={Logo} alt="" />
          </div>

          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <div className={styles.bilimber}>
                <h2>BilimBer</h2>
              </div>
              <div className={styles.signInSignup}>
                <p>
                  <Link to="/signup">Sign Up</Link>
                </p>
                <p>
                  <Link to="/signin">Sign In</Link>
                </p>
              </div>
            </div>
            <div className={styles.inputButtonContainer}>
              <FormSignUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
