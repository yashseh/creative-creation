import React from "react";
import styles from "./textInput.module.css";
import { ITextInputProps } from "./types";

const TextInput: React.FC<ITextInputProps> = ({
  value,
  onTextChange,
  heading,
  placeholder,
  customStyles,
}) => {
  return (
    <div>
      <h4 className={styles.header}>{heading}</h4>
      <input
        className={styles.input}
        value={value}
        style={{
          width: "100%",
          ...customStyles,
        }}
        onChange={onTextChange}
        placeholder={placeholder}
        type="search"
      />
    </div>
  );
};

export default TextInput;
