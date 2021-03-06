import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
import TodoList from '../components/TodoList'
import { apiUrl } from '../constants'
import axios from 'axios'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})

const mapDispatchToProps = ({
  onRowClick: toggleTodo,
  onRemoveClick: id => {
    axios.delete(`${apiUrl}task/delete/${id}`)

    return removeTodo(id);
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
