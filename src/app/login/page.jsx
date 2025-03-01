import React from "react";
import styles from "./styles.module.css";
import Heading from "../_ui/Heading";

const LoginPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Heading className={styles.title}>Login</Heading>
        <form>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="text"
                id="username"
                placeholder="Username"
              />
              <i className={`fas fa-user ${styles.icon}`}></i>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="password"
                id="password"
                placeholder="Password"
              />
              <i className={`fas fa-lock ${styles.icon}`}></i>
            </div>
          </div>
          <div className={styles.options}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} />
              <span>Remember me</span>
            </label>
            <a href="#" className={styles.forgotPassword}>
              Forgot password?
            </a>
          </div>
          <button className={styles.button}>Login</button>
        </form>
        <p className={styles.registerText}>
          Don't have an account?{" "}
          <a href="#" className={styles.registerLink}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
