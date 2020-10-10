import React from 'react';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal d-block' : 'modal d-none';

  return (
    <div id="myModal" className={showHideClassName} role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
