import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, title, description }) => (
  <tr
    onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
  >
    <td>
      {title}
    </td>
    <td>{description}</td>
    <td width="10">
      <button type="button" title="remove task" className="btn btn-sm btn-danger">
        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </button>
    </td>
  </tr>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Todo
