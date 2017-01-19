import React from 'react';
import TodoActions from '../data/TodoActions';

class TodoEditBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: props.todo.text
    }

    this.onChangeEditInput = this.onChangeEditInput.bind(this);
  }

  onChangeEditInput(e) {
    this.setState({
      userInput: this.editInput.value
    });
  }

  render() {
    return (
      <li key={this.props.todo.id}>
        <input type="text" ref={input => {this.editInput = input}} value={this.state.userInput}
                onChange={this.onChangeEditInput} />
        <button className="btn-custom" onClick={() => {
          TodoActions.editTodo(this.props.todo.id, this.editInput.value);
          TodoActions.stopEditingTodo();
        }}>
          Edit
        </button>
      </li>
    )    
  }
}

export default TodoEditBox;