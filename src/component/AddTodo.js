import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  state = {
    input: "",
  };

  handleAddTodo = () => {
    if (this.state.input.trim()) {
      this.props.addTodo({ task: this.state.input });
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <div className="add-todo-container">
        <input
          onChange={e => this.setState({ input: e.target.value })}
          onKeyDown={e => e.key === 'Enter' && this.handleAddTodo()}
          value={this.state.input}
          placeholder="What needs to be done?"
        />
        <button className="add-todo" disabled={!this.state.input.trim()} onClick={this.handleAddTodo}>
          Add
        </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);