import React, { useState } from "react";
import styles from "./dropdown.module.css";
import ArrowDown from "../icons/ArrowDown";

function Dropdown({ data }: { data: string[] }) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  const _data = ["Amber", "GreenyellowBluesih", "Red", "Yellow"];

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={styles.dropdownButton}
      >
        <p>{_data[selected!]}</p>
        <ArrowDown invert={showDropdown} />
      </button>

      <div
        style={{ visibility: !showDropdown ? "hidden" : "visible" }}
        className={styles.dropdownBody}
      >
        <div className={styles.content}>
          {_data.map((x, idx) => (
            <div
              key={idx}
              onClick={() => {
                setShowDropdown(false);
                setSelected(idx);
              }}
              className={`${styles.dropdownItem} ${
                selected === idx ? styles.active : ""
              }`}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
