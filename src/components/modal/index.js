import React from 'react';
import ReactDom from 'react-dom';
import propTypes from 'prop-types';

import './index.css';

export const Modal = ( props ) => {
    const { toggleModal, isModalOpen, removeItem } = props;
    if ( isModalOpen ) {
      return(
          ReactDom.createPortal(
            <div className="cover">
              <div className="modal">
                <p> Are you shure? </p>
                <p>
                  <button className="yes" onClick={ removeItem }> Yes </button>
                  <button className="no" onClick={ toggleModal }> No </button>
                </p>
              </div>
            </div>,
            document.querySelector('#modal-root')
          )
      );
    }
    return null;
};

Modal.propTypes = {
  isModalOpen: propTypes.bool.isRequired,
  toggleModal: propTypes.func.isRequired,
  removeItem: propTypes.func.isRequired
};
