import React, { useState } from "react";
import Modal from ".";
import Button from "../Button";
import ConfirmModal, { ConfirmProps } from "./ConfirmModal";
import styles from "./modal.module.css";
import Dropdown from "../Dropdown";

function InvestmentTypeModal({
  setShowModal,
  showModal,
  onCancel,
  onOk,
  okText,
  cancelText,
}: ModalProps & ConfirmProps) {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const closeAll = () => {
    setShowConfirm(false);
    setShowModal(false);
  };
  return (
    <Modal
      header="승인거부 사유 입력"
      footer={
        <div className="row">
          <Button
            onClick={() => (onOk ? onOk() : setShowConfirm(true))}
            style={{ width: " 150px" }}
            label={okText || "확인"}
            type="primary"
          />
          <Button
            onClick={() => (onCancel ? onCancel() : setShowModal(false))}
            style={{ width: " 150px" }}
            label={cancelText || "확인"}
            type="outlined"
          />
        </div>
      }
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div className={styles.modalBodyContainer}>
        <div className={styles.row}>
          <span className={styles.lhs}> 투자유형</span>
          <span className={styles.rhs}> 투자유형 투자유형</span>
        </div>
        <div className={styles.row}>
          <span className={styles.lhs}> 투자유형</span>
          <span className={styles.rhs}> 투자유형 투자유형</span>
        </div>

        <div className={styles.row}>
          <span className={styles.lhs}> 투자유형</span>
          <span className={styles.rhs}>
            <Dropdown data={[]} />
          </span>
        </div>
        <div className={styles.row}>
          <span className={styles.lhs}> 투자유형</span>
          <span className={styles.rhs}></span>
        </div>
      </div>
      <ul className={styles.hint}>
        <li>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다. 최대 10개,</li>
        <li>100MB까지 등록이 가능합니다.</li>
      </ul>
      <ConfirmModal
        onCancel={closeAll}
        onOk={closeAll}
        showModal={showConfirm}
        setShowModal={setShowConfirm}
      />
    </Modal>
  );
}

export default InvestmentTypeModal;
