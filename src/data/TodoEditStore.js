import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Counter from '../utils/Counter';
import Todo from './Todo';

class TodoEditStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return -1;
  }

  reduce(state, action) {
    switch(action.type) {
      case TodoActionTypes.START_EDITING_TODO:
        return action.id;
      case TodoActionTypes.STOP_EDITING_TODO:
        return -1;
      default:
        return state;
    }
  }
}

export default new TodoEditStore();