import React, { HTMLAttributes } from "react";
import styles from "./button.module.css";

function Button({
  label,
  type,
  ...props
}: ButtonProps & HTMLAttributes<HTMLButtonElement>) {
  const getButtonClass = () => {
    switch (type) {
      case "outlined":
        return styles.outlined;
      case "primary":
        return styles.primary;
      case "text":
        return styles.text;
      default:
        return styles.text;
    }
  };

  return (
    <button className={`${styles.button} ${getButtonClass()}`} {...props}>
      {label}
    </button>
  );
}

export default Button;
