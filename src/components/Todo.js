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
  </tr>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Todo
