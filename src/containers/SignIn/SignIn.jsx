import React from "react";
import styles from "./SignIn.module.scss";


const SignIn = (props) => {
  const { signIn } = props;

  return (
    <div className={styles.homePage}>
      <h1>PUNK-API</h1>
        <h4> Sign in to search for your favourite beer</h4>
        <button onClick={signIn}>SIGN IN</button>
        

      
    </div>
  );
};

export default SignIn;
