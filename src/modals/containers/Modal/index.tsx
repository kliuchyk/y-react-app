import React from 'react';

import Portal from '../../../containers/Portal';
import './styles.css';

interface ModalProps {
  title: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <Portal>
      <div className="modal-body">
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <span onClick={onClose} className="modal-close-btn">
            +
          </span>
        </div>

        <div className="modal-content">{children}</div>
      </div>
    </Portal>
  );
};

export default Modal;
