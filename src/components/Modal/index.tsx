import React from "react";
import styles from "./modal.module.css";
import Divider from "../Divider";
import Close from "../icons/Close";

function Modal({
  header,
  footer,
  children,
  showModal,
  setShowModal,
  infoModal,
}: ModalProps) {
  if (!showModal) {
    return <></>;
  }
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          {header} <Close onClick={() => setShowModal(false)} />
        </div>
        {!infoModal && <Divider />}

        <div className={styles.modalBody}>{children}</div>
        {!infoModal && <Divider />}
        <div className={styles.modalFooter}>{footer}</div>
      </div>
    </div>
  );
}

export default Modal;
