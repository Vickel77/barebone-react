import React from "react";
import styles from "./pill.module.css";

function Pill({ type, label }: PillProps) {
  return <div className={`${styles.pill} ${styles[type]}`}>{label}</div>;
}

export default Pill;
