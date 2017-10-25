import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let title, description

  return (
    <div className="row">
      <form onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim()) {
          return
        }
        dispatch(addTodo(title.value, description.value))
        title.value = ''
        description.value = ''
      }}>
        <div className="col-sm-5 col-lg-3 form-group">
          <input className="form-control" placeholder="Title" ref={node => {
            title = node
          }} />
        </div>
        <div className="col-sm-7 col-lg-4 form-group">
          <div className="input-group">
            <input className="form-control" placeholder="Description" ref={node => {
              description = node
            }} />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">
                Add Todo <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
