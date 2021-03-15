import React from "react";
import styles from "./SignIn.module.scss";
import beer from "./brewdog.png";


const SignIn = (props) => {
  const { signIn } = props;

  return (
    <div className={styles.homePage}>
      <h1>
        PUNK-API</h1>
        <h4>Search for your favourite beer</h4>
        <img src={beer} />

      <button onClick={signIn}>SIGN IN</button>
    </div>
  );
};

export default SignIn;
