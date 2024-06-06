import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.createTodo = this.createTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  createTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  updateTodo(id, newTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompleted(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
        toggleCompleted={this.toggleCompleted}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          Todo List <span>A simple Todo List App</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.createTodo} />
      </div>
    );
  }
}

export default TodoList;
