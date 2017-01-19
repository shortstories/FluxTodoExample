import React from 'react';
import TodoEditBox from './TodoEditBox';
import TodoActions from '../data/TodoActions';

class TodoList extends React.Component {
  render() {
    if (this.props.todos.size === 0) {
      return null;
    } else {
      return (
        <section id="main">
          <ul id="todo-list">
            {this.todoElements([...this.props.todos.values()].reverse())}
          </ul>
        </section>
      )
    }
  }

  todoElements(todos) {
    return todos.map(todo => {
        if (todo.id === this.props.editId) {
          return (<TodoEditBox key={todo.id} todo={todo} />);
        }

        return (
          <li key={todo.id} onDoubleClick={e => {TodoActions.startEditingTodo(todo.id)}}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={todo.complete} 
                      onChange={() => {TodoActions.toggleTodo(todo.id)}} />
              <label>{todo.text}</label>
              <button className="destroy" onClick={() => {TodoActions.deleteTodo(todo.id)}} />
            </div>
          </li>
        ); 
      });
  }
}

export default TodoList;