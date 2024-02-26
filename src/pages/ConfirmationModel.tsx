import React from 'react';

interface Props {
  closeModal: () => void;
}

const ConfirmationModal: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="ModalOverlay">
      <div className="ConfirmationModal">
        <p>Order submitted. Thank you for shopping with us!</p>
        <button onClick={closeModal}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
