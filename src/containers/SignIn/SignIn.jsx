import React from "react";
import styles from "./SignIn.module.scss";

const SignIn = (props) => {
  const { signIn } = props;

  return (
    <div className={styles.homePage}>
      <h1>
        PUNK-API: <br /> Search for your favourite beer
      </h1>

      <button onClick={signIn}>SIGN IN</button>
    </div>
  );
};

export default SignIn;
