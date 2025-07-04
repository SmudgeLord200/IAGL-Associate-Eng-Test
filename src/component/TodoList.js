import { Component } from "react";
import Todo from "./Todo";
import { fetchTodos } from "../actions";
import { connect } from "react-redux";
class TodoList extends Component {
  state = {
    currentPage: 1,
    todosPerPage: 5,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  handlePageChange = (pageNum) => {
    this.setState({ currentPage: pageNum });
  };

  render() {
    const { todos } = this.props.data;
    const { currentPage, todosPerPage } = this.state;
    const totalTodos = todos ? todos.length : 0;
    const totalPages = Math.ceil(totalTodos / todosPerPage);
    const startIdx = (currentPage - 1) * todosPerPage;
    const endIdx = startIdx + todosPerPage;
    const currentTodos = todos ? todos.slice(startIdx, endIdx) : [];

    return (
      <>
        <ul className="todo-list">
          {currentTodos && currentTodos.length ? (
            currentTodos.map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })
          ) : (
            <div className="no-todos">No todos, yay!</div>
          )}
        </ul>
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`pagination-btn${currentPage === i + 1 ? ' active' : ''}`}
                onClick={() => this.handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData,
});
export default connect(mapStateToProps, {
  fetchTodos,
})(TodoList);
