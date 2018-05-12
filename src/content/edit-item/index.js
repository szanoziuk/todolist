import React, {Fragment} from 'react';

export const EditItem = ({ item, toggleMode, saveText }) => {
  let textField = null;

  const onSave = () => {
    const text = textField.value;
    const { id } = item;
    saveText(id, text);
    toggleMode();
  }

  return(
    <Fragment>
      <input
        type="text"
        defaultValue={ item.text }
        ref={ input => { textField = input; } }>
      </input>
      <button onClick={ onSave }> Save </button>
      <button onClick={ toggleMode }> Cancel </button>
    </Fragment>
  );
}
