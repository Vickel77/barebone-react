import React from "react";
import Modal from ".";
import Info from "../icons/Info";
import Button from "../Button";
import { ConfirmProps } from "./ConfirmModal";

function InfoModal({
  showModal,
  setShowModal,
  children,
  onOk,
  okText,
}: ModalProps & ConfirmProps) {
  return (
    <Modal
      header={<Info />}
      footer={
        <>
          <Button
            onClick={onOk}
            style={{ width: " 200px" }}
            label={okText || "확인"}
            type="primary"
          />
        </>
      }
      showModal={showModal}
      setShowModal={setShowModal}
      infoModal
    >
      {children ? children : <p>최대 10개까지 등록 가능합니다.</p>}
    </Modal>
  );
}

export default InfoModal;
