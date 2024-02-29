import React from "react";
import Modal from ".";
import Info from "../icons/Info";
import Button from "../Button";

export interface ConfirmProps {
  onOk?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
}

function ConfirmModal({
  showModal,
  setShowModal,
  onOk,
  onCancel,
  okText,
  cancelText,
}: ModalProps & ConfirmProps) {
  return (
    <Modal
      header={<Info />}
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
      infoModal
    >
      <p>최대 10개까지 등록 가능합니다.</p>
    </Modal>
  );
}

export default ConfirmModal;
