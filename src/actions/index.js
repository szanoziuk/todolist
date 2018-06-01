import * as  constants from './constants';
import { createAction } from '../helpers';

export const selectCategory = createAction(constants.CATEGORY_SELECT);
export const toggleDone = createAction(constants.TODO_DONE_TOGGLE);
export const saveTodo = createAction(constants.TODO_SAVE);
export const deleteTodo = createAction(constants.TODO_DELETE);
export const addTodo = createAction(constants.TODO_ADD);
