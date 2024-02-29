import React from "react";
import Modal from ".";
import Button from "../Button";
import { ConfirmProps } from "./ConfirmModal";

function RefusalModal({
  setShowModal,
  showModal,
  onCancel,
  onOk,
  okText,
  cancelText,
}: ModalProps & ConfirmProps) {
  return (
    <Modal
      header="승인거부 사유 입력"
      footer={
        <div className="row">
          <Button
            onClick={onOk}
            style={{ width: " 150px" }}
            label={okText || "확인"}
            type="primary"
          />
          <Button
            onClick={onCancel}
            style={{ width: " 150px" }}
            label={cancelText || "확인"}
            type="outlined"
          />
        </div>
      }
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <p>최대 10개까지 등록 가능합니다.</p>
    </Modal>
  );
}

export default RefusalModal;
