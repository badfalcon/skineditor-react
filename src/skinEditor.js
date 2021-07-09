import React, {Component} from 'react';

export default class SkinEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }

  render() {
    const {todos} = this.state;

    return (<div>
      <input type="text" onInput={this.onInput}/>
      <button onClick={this.addTodo}>登録</button>
      <ul>
        {todos.map((todo, index) => <li key={index}>
          {todo}
          <button onClick={() => {
            this.removeTodo(index)
          }}>削除
          </button>
        </li>)}
      </ul>
    </div>);
  }
}