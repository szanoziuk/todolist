import React, {Component, Fragment} from 'react';
import { Modal } from '../../component/modal';

import './index.css';

export class Item extends Component {
  state = {
    isModalOpen: false
  }

   toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  removeItem = () => {
    const { itemDelete, item } = this.props;
    itemDelete( item.id );
  }

  render() {
    const { item, toggleDone, toggleMode } = this.props;
    const { isModalOpen } = this.state;
    const { toggleModal } = this;
     return(
      <Fragment>
        <label className={ item.done ? 'strikethrough' : '' }>
          <input
            type="checkbox"
            checked={ item.done }
            onChange={ () => toggleDone(item.id) }
          />
          { item.text }
        </label>
        <button
          className={ item.done ? 'non-active' : 'btn' }
          onClick={ !item.done ? toggleMode : null }
        > Edit </button>
        <button
          className={ item.done ? 'non-active' : 'btn' }
          onClick={ !item.done ? toggleModal : null }
        > Delete </button>

        <Modal
          isModalOpen={ isModalOpen }
          toggleModal={ toggleModal }
          removeItem={ this.removeItem }
        />
      </Fragment>
    );
  }
}
