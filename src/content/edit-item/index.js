import React from 'react';

import './index.css';

export const EditItem = ({ item, toggleMode, saveText }) => {
  let textField = null;

  const onSave = () => {
    const text = textField.value;
    const { id } = item;
    saveText({ id, text });
    toggleMode();
  };

  return(
    <div className="wrap">
      <input
        type="text"
        defaultValue={ item.text }
        ref={ input => { textField = input; } }>
      </input>
      <button className="btn" onClick={ onSave }>
        <i className="fas fa-save"></i>
      </button>
      <button className="btn" onClick={ toggleMode }>
        <i className="fas fa-ban"></i>
      </button>
    </div>
  );
};
