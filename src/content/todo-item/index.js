import React, { Component } from 'react';
import { Item } from '../item';
import { EditItem  } from '../edit-item';
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
}
