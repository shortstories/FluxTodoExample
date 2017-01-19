import React from 'react';
import TodoActions from '../data/TodoActions';

class TodoInputBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="new-todo">
        <input id="input-new-todo" type="text" value={this.props.userInput} 
                ref={(input) => {this.inputNewTodo = input}} 
                onChange={e => {TodoActions.updateDraft(this.inputNewTodo.value)}} />
        <button id="btn-add-todo" className="btn-custom"
                onClick={e => {TodoActions.addTodo(this.inputNewTodo.value)}}>
                Add</button>
      </div>
    )
  }
}

export default TodoInputBox;