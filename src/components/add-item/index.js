import React from 'react';
import propTypes from 'prop-types';

import './index.css'

export const AddItem = ({ toggleMode, addItem, categoryId }) => {
  let textField = null;

  const onSave = () => {
    const text = textField.value;
    addItem({ text, categoryId });
    toggleMode();
  }

  return(
    <div className="add-item-wrapper">
      <input
        type="text"
        ref={ input => { textField = input; } }
      />
      <div>
        <button onClick={ onSave } className="btn">
          <i className="fas fa-save"></i>
        </button>
        <button onClick={ toggleMode } className="btn">
           <i className="fas fa-ban"></i>
        </button>
      </div>
    </div>
  );
};


AddItem.propTypes = {
  categoryId: propTypes.number.isRequired,
  toggleMode: propTypes.func.isRequired,
  addItem: propTypes.func.isRequired
}
