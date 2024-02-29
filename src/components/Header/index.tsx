import React from "react";
import Navbar from "../Navbar";
import styles from "./header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <h1>
          회원상세 <span className={styles.red}>필수항목</span>
        </h1>
      </div>
      <Navbar />
    </header>
  );
}
