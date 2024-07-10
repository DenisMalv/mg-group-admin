import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

import Icon from 'components/Icons/IconSprite';

const Modal = ({ show, showInstant, onClose, children, overlayRef }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    setTimeout(()=>overlayRef && overlayRef.current?.classList.toggle('modal-overlay-show'),4)
    
  }, [overlayRef, show]);

  if (!show && !showInstant) return null;
 

  return ReactDOM.createPortal(
    <div className={`modal-overlay ${showInstant ? 'modal-overlay-show' : ''}`} onMouseUp={onClose} ref={overlayRef}>
      <div className="modal-content br-24-to-20" onMouseUp={e => e.stopPropagation()}>
        <button className="modal-close" onMouseUp={onClose}>
            <Icon classlist={`step-four-icon-close`} id={`login-restore-close`} name="close" stroke="#fff" width="24" height="24"/>
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;