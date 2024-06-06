import React, { Component } from 'react';
import './Todo.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isEdting: false,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.toggleForm();
    this.props.updateTodo(this.props.id, this.state.task);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleToggle(evt) {
    this.props.toggleCompleted(this.props.id);
  }
  toggleForm() {
    this.setState({
      isEdting: !this.state.isEdting,
    });
  }
  render() {
    let result;
    if (this.state.isEdting) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li
            onClick={this.handleToggle}
            className={this.props.completed ? 'completed' : ''}
          >
            {this.props.task}
          </li>
        </div>
      );
    }
    return result;
  }
}

export default TodoList;
