import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onRowClick, onRemoveClick }) => (
  <div className="row">
    <div className="col-lg-6">
      <table className="table table-hover">
        <tbody>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onRowClick={() => onRowClick(todo.id)}
            onRemoveClick={() => onRemoveClick(todo.id)}
          />
        )}
        </tbody>
      </table>
    </div>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onRowClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
}

export default TodoList
