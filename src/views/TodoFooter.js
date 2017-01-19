import React from 'react';
import TodoActions from '../data/TodoActions';

class TodoFooter extends React.Component {
  render() {
    if (this.props.todos.size === 0) {
      return null;
    } else {

      const remaining = this.props.todos.filter(todo => !todo.complete).size;
      const phrase = remaining <= 1 ? ' item left' : ' items left';

      return (
        <footer id="footer">
          <span id="todo-count">
            <strong>{remaining}</strong>
            {phrase}
          </span>
          <button className="btn-custom" 
                  onClick={e => {TodoActions.deleteCompletedTodo()}}>
            Clear completed
          </button>
          <button className="btn-custom" 
                  onClick={e => {TodoActions.toggleAllTodo()}}>
            Toggle All Todos
          </button>
        </footer>
      )
    }
  }
}

export default TodoFooter;