import React, { Component } from 'react';
import { Item } from '../item';
import { EditItem  } from '../edit-item';
import propTypes from 'prop-types';

import './index.css';

export class TodoItem extends Component {
  state = {
    editMode: false
  }

  toggleMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  render() {
    const { editMode } = this.state;
    const {  item, toggleDone, saveText, itemDelete } = this.props;
    return(
      <li>
        {
          editMode
          ? <EditItem
              item={ item }
              toggleMode={ this.toggleMode }
              saveText={ saveText } />
          : <Item
              item={ item }
              toggleMode={ this.toggleMode }
              toggleDone={ toggleDone }
              itemDelete={ itemDelete }/>
        }
      </li>
    );
  }
};

TodoItem.propTypes = {
  item: propTypes.shape({
    categoryId: propTypes.number.isRequired,
    done: propTypes.bool.isRequired,
    id: propTypes.number.isRequired,
    text: propTypes.string.isRequired
  }).isRequired,
  toggleDone: propTypes.func.isRequired,
  saveText: propTypes.func.isRequired,
  itemDelete: propTypes.func.isRequired
};
