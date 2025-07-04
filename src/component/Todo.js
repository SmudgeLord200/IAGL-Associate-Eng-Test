import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../actions";
class Todo extends Component {
  state = {
    isEditing: false,
    task: this.props.todo.task,
    tooltipVisible: false,
    tooltip: "Double-click to edit",
  };

  handleUpdate = () => {
    if (this.state.task.trim() && this.state.task !== this.props.todo.task) {
      this.props.updateTodo({ ...this.props.todo, task: this.state.task });
    }
    this.setState({ isEditing: false });
  };

  handleDelete = () => {
    this.props.deleteTodo(this.props.todo.id);
  };

  render() {
    const { isEditing, task } = this.state;
    const { todo } = this.props;

    return (
      <li className="todo-item">
        {isEditing ? (
          <div className="todo-item__edit">
            <input
              type="text"
              value={task}
              onChange={(e) => this.setState({ task: e.target.value })}
              onBlur={this.handleUpdate}
              onKeyDown={(e) => e.key === "Enter" && this.handleUpdate()}
              autoFocus
            />
            <button onClick={this.handleUpdate}>Save</button>
          </div>
        ) : (
          <span
            className="todo-item__text"
            onDoubleClick={() => this.setState({ isEditing: true })}
            onMouseEnter={() => this.setState({tooltipVisible: true})}
            onMouseLeave={() => this.setState({tooltipVisible: false})}
            title={this.state.tooltipVisible ? this.state.tooltip : ""}
          >
            {todo.task}
          </span>
        )}
        <button className="delete-todo" onClick={this.handleDelete}>
          Delete
        </button>
      </li>
    );
  }
}

export default connect(null, { updateTodo, deleteTodo })(Todo);
