import React, { useState } from "react";
import styles from "./navbar.module.css";

function Navbar() {
  const [selected, setSelected] = useState<number>(0);
  const navItems = [
    "Hello",
    "Poland",
    "Listen",
    "Ambrose",
    "Libya",
    "Liberia",
    "Kenya",
  ];

  return (
    <nav className={styles.nav}>
      {navItems.map((item, idx) => (
        <span
          onClick={() => setSelected(idx)}
          key={idx}
          className={`${styles.span} ${selected === idx ? styles.active : ""}`}
        >
          {" "}
          {item}{" "}
        </span>
      ))}
    </nav>
  );
}

export default Navbar;
