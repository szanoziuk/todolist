import React, { Component } from 'react';
import { Modal } from '../modal';
import propTypes from 'prop-types';

import './index.css';

export class Item extends Component {
  state = {
    isModalOpen: false
  };

   toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };
  removeItem = () => {
    const { itemDelete, item } = this.props;
    itemDelete( item.id );
  };

  render() {
    const { item, toggleDone, toggleMode } = this.props;
    const { isModalOpen } = this.state;
    const { toggleModal } = this;
     return(
      <div className="wrap">
        <div className="text">
          <label className={ item.done ? 'strikethrough' : '' }>
            <input
              type="checkbox"
              checked={ item.done }
              onChange={ () => toggleDone(item.id) }
            />
            { item.text }
          </label>
        </div>
        <div className="buttons">
          <button
            className={ item.done ? 'non-active' : 'btn' }
            onClick={ !item.done ? toggleMode : null }
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            className={ item.done ? 'non-active' : 'btn' }
            onClick={ !item.done ? toggleModal : null }
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <Modal
          isModalOpen={ isModalOpen }
          toggleModal={ toggleModal }
          removeItem={ this.removeItem }
        />
      </div>
    );
  }
};


Item.propTypes = {
  item: propTypes.shape({
    categoryId: propTypes.number.isRequired,
    done: propTypes.bool.isRequired,
    id: propTypes.number.isRequired,
    text: propTypes.string.isRequired
  }).isRequired,
  toggleDone: propTypes.func.isRequired,
  toggleMode: propTypes.func.isRequired,
  itemDelete: propTypes.func.isRequired,
};
