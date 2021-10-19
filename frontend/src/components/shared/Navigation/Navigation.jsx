import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };
  const logoText = {
    marginLeft: "10px",
    marginTop: "5px",
  };

  return (
    <div className={`${styles.navbar} container`}>
      {/*  The above css in Navigation.module.css will be applied ONLY ON Navigation  --- 
    but not in their parents components....So the Link component WILL NOT GET the css....
     */}
      <Link style={brandStyle} to='/'>
        <img src='./images/logo.png' alt='logo' className='logo' />
        <span style={logoText}>Codershouse</span>
      </Link>
    </div>
  );
};

export default Navigation;
