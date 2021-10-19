import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick }) => {
  // function btnRegister() {
  //   console.log("Btn clicked");
  // }
  return (
    <button onClick={onClick} className={styles.button}>
      <span className={styles.text}>{text}</span>
      <img src='/images/Vectorarrow.png' alt='no' className='arrow' />
    </button>
  );
};

export default Button;
