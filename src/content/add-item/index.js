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
      <button onClick={ onSave }> Save </button>
      <button onClick={ toggleMode }> Cancel </button>
    </div>
  );
}
