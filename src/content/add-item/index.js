import React from 'react';

export const AddItem = ({ toggleMode, addItem }) => {
  let textField = null;

  const onSave = () => {
    const text = textField.value;
    addItem(text);
    toggleMode();
  }

  return(
    <div>
      <input
        type="text"
        ref={ input => { textField = input; } }
      />
      <button onClick={ onSave }> <i className="fas fa-save"></i> </button>
      <button onClick={ toggleMode }> <i className="fas fa-ban"></i> </button>
    </div>
  );
}
