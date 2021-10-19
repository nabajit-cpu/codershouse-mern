import React, { Children } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Home.module.css";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";

const Home = () => {
  const history = useHistory();
  const signInLink = {
    color: "var(--blue)",
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "10px",
  };
  function btnRegister() {
    history.push("/register");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title='Welcome to Codershouse !' logo='./images/logo.png'>
        <p className={styles.text}>
          I want my team to spend time thinking about high level UX
          problems,rather than mindlessly repeating busy work. Figma helps them
          do that.
        </p>
        <div className={styles.button_text}>
          <Button onClick={btnRegister} text='Your username' />
          <div className={styles.signInWrapper}>
            <spa className={styles.invite}>Have an invite text?</spa>
            <Link style={signInLink} to='/login'>
              Sign in
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
