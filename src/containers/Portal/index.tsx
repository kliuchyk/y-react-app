import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

interface PortalProps {
  el?: string;
}

const Portal: React.FC<PortalProps> = ({ children, el = 'div' }) => {
  const [container] = useState(document.createElement(el));

  useEffect(() => {
    document.body.appendChild(container);
    container.setAttribute('class', 'modal-container');
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.removeChild(container);
      document.body.style.overflow = 'auto';
    };
  }, [container]);

  return createPortal(children, container);
};

export default Portal;
