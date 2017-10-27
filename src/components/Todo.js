import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onRowClick, onRemoveClick, completed, title, description }) => (
  <tr    
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
  >
    <td onClick={onRowClick} >
      {title}
    </td>
    <td onClick={onRowClick} >{description}</td>
    <td width="10">
      <button onClick={onRemoveClick} type="button" title="remove task" className="btn btn-sm btn-danger">
        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </button>
    </td>
  </tr>
)

Todo.propTypes = {
  onRowClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Todo
