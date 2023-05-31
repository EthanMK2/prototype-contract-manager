import { useEffect, useState } from "react";
import styles from "../sass/pages/Login.module.scss";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // store token, then navigate
        localStorage.setItem("uid", userCredential.user.uid);
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
      <h1 className={styles["login-title"]}>Login</h1>
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
        <button type="submit">Login</button>
      </form>
      <Link to="/">Home</Link>
    </main>
  );
};

export default Login;
