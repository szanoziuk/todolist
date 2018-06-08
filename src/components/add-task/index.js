import React, { Component, Fragment } from 'react';
import { AddItem } from '../add-item';
import propTypes from 'prop-types';

import './index.css';

export class  AddTask extends Component {
  state = {
    editMode: false
  }

  toggleMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  render() {
    return(
      <Fragment>
        <button
          onClick={ this.toggleMode }
          className="add"
        > Add new task </button>
        { this.state.editMode
          && <AddItem
              toggleMode={ this.toggleMode }
              categoryId={ this.props.selectedCategory }
              addItem={ this.props.addItem }/>
        }
      </Fragment>
    )
  }
};


AddTask.propTypes = {
  selectedCategory: propTypes.number.isRequired,
  addItem: propTypes.func.isRequired
}
