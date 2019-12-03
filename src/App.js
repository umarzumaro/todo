import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        content: "ngoding javascript"
      },
      {
        id: 2,
        content: "ngoding C++"
      }
    ]
  }

  deleteTodo = (id) => {
    // console.log(this.state.todos[0].id)
    // alert('anda yakin ?')
    const todos = this.state.todos.filter(todo => {
      // console.log(todo)
      return todo.id !== id
    })


    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();



    let todos = [...this.state.todos, todo];


    this.setState({
      todos: todos
    })

    // let cont = this.state.todos.map(todo => {
    //   return todo.content
    // })
    // console.log(cont)

  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} todos={this.state.todos} />
      </div >
    );
  }
}

export default App;
