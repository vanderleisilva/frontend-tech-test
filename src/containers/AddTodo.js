import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="row">
      <form className="col-lg-6" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <div className="input-group">
          <input className="form-control" ref={node => {
            input = node
          }} />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">
              Add Todo <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
            </button>
          </span>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
