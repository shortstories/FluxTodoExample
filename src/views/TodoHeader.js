import React from 'react';

class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header id="header">
        <h1>todos</h1>
      </header>
    )
  }
}

export default TodoHeader;