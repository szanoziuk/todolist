import { addTodo, toggleDone, deleteTodo }  from '../reducers/todos'

describe('test actions', () => {
  it('should create an action to add a todo', () => {
    const payload = {
      text: 'Learn Jtest',
      categoryId: '1'
    };
    const expectedAction = {
      type: 'app/todos/TODO_ADD',
      payload
    };
    expect(addTodo(payload)).toEqual(expectedAction);
  });

  it('should create an action to toggle done', () => {
    const expectedAction = {
      type: 'app/todos/TODO_DONE_TOGGLE'
    };
    expect(toggleDone()).toEqual(expectedAction);
  });

  it('should create an action to delete a todo', () => {
    const payload = '1';
    const expectedAction = {
      type: 'app/todos/TODO_DELETE',
      payload
    };
    expect(deleteTodo(payload)).toEqual(expectedAction);
  });

});
