let nextTodoId = 0
export const addTodo = (title, description) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  title,
  description
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
