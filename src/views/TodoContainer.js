import React from 'react';
import TodoStore from '../data/TodoStore';
import TodoDraftStore from '../data/TodoDraftStore';
import TodoEditStore from '../data/TodoEditStore';
import TodoActions from '../data/TodoActions';
import {Container} from 'flux/utils';

import TodoHeader from './TodoHeader';
import TodoInputBox from './TodoInputBox';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: null,
      userInput: ""
    }

    this.dispatchAdd = this.dispatchAdd.bind(this);
    this.dispatchUpdateDraft = this.dispatchUpdateDraft.bind(this);
  }

  render() {
    return (
      <div className="todo-container">
        <TodoHeader />
        <TodoInputBox dispatchAdd={this.dispatchAdd} dispatchUpdateDraft={this.dispatchUpdateDraft}
                      userInput={this.state.userInput} />
        <TodoList todos={this.state.todos} editId={this.state.editId} />
        <TodoFooter todos={this.state.todos} />
      </div>
    );
  }

  dispatchAdd(text) {
    TodoActions.addTodo(text);
  }

  dispatchUpdateDraft(text) {
    TodoActions.updateDraft(text);
  }

  // override Container
  static getStores() {
    return [
      TodoStore,
      TodoDraftStore,
      TodoEditStore
    ];
  }

  static calculateState(prevState) {
    return {
      todos: TodoStore.getState(),
      userInput: TodoDraftStore.getState(),
      editId: TodoEditStore.getState()
    };
  }
}

export default Container.create(TodoContainer);