import React from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({ addCategory }) => {
  let textField = null;

  const onAddCategory = () => {
    const text = textField.value;
    addCategory({ text });
  }

  return(
    <div>
      <input
        type="text"
        placeholder="new category"
        ref={ input => { textField = input; } }
      />
      <button onClick={ onAddCategory } className="btn"> Add category </button>
    </div>
  );
};

AddCategory.propTypes = {
  addCategory: propTypes.func.isRequired
};
