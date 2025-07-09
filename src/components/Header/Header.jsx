import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router";
import loginSvg from "../../assets/loginBtn.svg";

const Header = () => {
  const handleLoginClick = () => {
    console.log("Login clicked");
  };
  return (
    <div>
      <header className={s.header}>
        <div className={s.logo}>
          <img src="/logo.svg" />
          <p className={s.logoText}>LearnLingo</p>
        </div>
        <nav className={s.nav}>
          <NavLink to="/" className={s.navLink}>
            Home
          </NavLink>
          <NavLink to="/teachers" className={s.navLink}>
            Teachers
          </NavLink>
        </nav>
        <div className={s.authorization}>
          <button className={s.loginBtn}>
            <span className={s.loginSpan}>
              <img
                src={loginSvg}
                className={s.loginSvg}
                width={20}
                height={20}
              />
            </span>
            <p className={s.loginText} onClick={handleLoginClick}>
              Log in
            </p>
          </button>
          <button className={s.registerBtn}>Registration</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
