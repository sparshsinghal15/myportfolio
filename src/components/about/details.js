import Modal from "antd/es/modal";
import React from "react";

const Details = ({ section, detailsModalVisible, setDetailsModalVisible }) => {
  const closeModal = () => {
    setDetailsModalVisible(false);
  };

  return (
    <Modal
      className="custom-modal"
      centered
      closable
      onCancel={closeModal}
      open={detailsModalVisible}
      footer={false}
      width="70%"
    >
      <div className="heading-2">{section.title}</div>

      <div className="action-buttons mb-4">
        <div
          className="custom-button custom-button-white-ghost"
          onClick={closeModal}
        >
          Close
        </div>
        <div className="ml-2">{section.resumeBtn}</div>
      </div>
    </Modal>
  );
};

export default Details;
