import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '', height: '', color: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createBox(this.state);
    this.setState({ width: '', height: '', color: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            id="width"
            name="width"
            type="text"
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            id="height"
            name="height"
            type="text"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <input
            id="color"
            name="color"
            type="text"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>
        <button>Add New Box</button>
      </form>
    );
  }
}

export default NewBoxForm;
