import React from 'react';

import './index.css'

export const AddItem = ({ toggleMode, addItem, category }) => {
  let textField = null;

  const onSave = () => {
    const text = textField.value;
    addItem({ text, category });
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
}
