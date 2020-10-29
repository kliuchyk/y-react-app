import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

import Portal from '../../../containers/Portal';
import './styles.css';
import { selectLoading } from '../../../products/selectors';

interface ModalProps {
  title: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  const loading = useSelector(selectLoading);

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
        {loading && (
          <div className="modal-spin">
            {' '}
            <Spin size="large" />
          </div>
        )}
      </div>
    </Portal>
  );
};

export default Modal;
