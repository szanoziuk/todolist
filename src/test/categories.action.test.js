import { selectCategory, addCategory }  from '../reducers/categories';

describe('test actions', () => {
  it('should create an action to add a category', () => {
    const payload = {
      text: 'test'
    };
    const expectedAction = {
      type: 'app/categories/CATEGORY_ADD',
      payload
    };
    expect(addCategory(payload)).toEqual(expectedAction);
  });

  it('should create an action to select category', () => {
    const expectedAction = {
      type: 'app/categories/CATEGORY_SELECT'
    };
    expect(selectCategory()).toEqual(expectedAction);
  });

});
