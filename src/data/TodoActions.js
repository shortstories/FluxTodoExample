import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text
    });
  },

  deleteTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id
    });
  },
  deleteCompletedTodo() {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_COMPLEATED_TODO
    });
  },

  toggleTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id
    });
  },
  toggleAllTodo() {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_ALL_TODO
    });
  },

  updateDraft(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.UPDATE_DRAFT,
      text
    });
  },

  startEditingTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.START_EDITING_TODO,
      id
    });
  },
  stopEditingTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.STOP_EDITING_TODO,
      id
    });
  },
  editTodo(id, text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.EDIT_TODO,
      id,
      text
    });
  }
};

export default Actions;