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
      <button onClick={ onSave }> <i class="fas fa-save"></i> </button>
      <button onClick={ toggleMode }> <i class="fas fa-ban"></i> </button>
    </div>
  );
}
