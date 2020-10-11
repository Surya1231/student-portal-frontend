/* eslint-disable react/prop-types */
import React from 'react';

const Modal = ({ handleClose, show, children, title }) => {
  const showHideClassName = show ? 'modal d-block' : 'modal d-none';
  const body = children[0];
  const footer = children[1];
  return (
    <>
      <div id={title} className={showHideClassName} role="dialog" aria-modal="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              {title}
              <button type="button" className="close" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">{body}</div>
            <div className="modal-footer">{footer}</div>
          </div>
        </div>
      </div>
      {show && <div className="overlay"> </div>}
    </>
  );
};

export default Modal;
