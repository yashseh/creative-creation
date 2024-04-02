import React from "react";
import styles from "./Button.module.css";
import { IButtonProps } from "./types";
const Button: React.FC<IButtonProps> = ({ onClick, isDisabled, title }) => {
  return (
    <div className={styles.container}>
      <div
        onClick={onClick}
        className={`${styles.buttonContainer} ${
          isDisabled ? styles.disabled : ""
        }`}
      >
        {title}
      </div>
    </div>
  );
};

export default Button;
