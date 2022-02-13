import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";
import {useSelector} from "react-redux";
import {getAuth, getIsLogged} from "../../Redux/selectors";
export default function LoginPage() {

    let user = useSelector(getAuth);
    console.log(user)
    let isLogged = useSelector(getIsLogged);
    console.log(isLogged);
  return (
    <div className={styles.body}>
      <div className={styles.loginWindow}>
        <LoginForm />
      </div>
    </div>
  );
}
