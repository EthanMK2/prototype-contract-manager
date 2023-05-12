import { useEffect, useState } from "react";
import styles from "../sass/pages/SignUp.module.scss";
import { Form } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  useEffect(() => {
    const appGrid = document.getElementById("app-grid"); // bad, but need to modify parent grid style
    appGrid!.style.display = "block";
  }, []);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = (event: any): void => {
    event.preventDefault();
    // send this data to firebase url, return token
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // created and signed in! store then navigate
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main>
      <h1 className={styles["signup-title"]}>SignUp</h1>
      <form onSubmit={submitHandler}>
        <input
          id="email"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          id="password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">SignUp</button>
      </form>
    </main>
  );
};

export default SignUp;
