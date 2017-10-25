import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import axios from 'axios'

let AddTodo = ({ dispatch }) => {
  let title, description

  axios.get('http://localhost:9001/tasks')
  .then(response => {
    response.data.tasks.forEach(i => {dispatch(addTodo(i.title, i.description))});
  })

  let onSubmit = e => {
    e.preventDefault()
    if (!title.value.trim()) {
      return
    }

    axios.post('http://localhost:9001/task/create', { 
      title: title.value, 
      description: description.value 
    })
    .then(response => {
      dispatch(addTodo(title.value, description.value))
      title.value = ''
      description.value = ''
    })
  }

  return (
    <div className="row">
      <form onSubmit={onSubmit}>
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

export default connect()(AddTodo)
