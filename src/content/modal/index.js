import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';

export class Modal extends Component {
  render() {
    const { toggleModal, isModalOpen, removeItem } = this.props;
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
  }
}
