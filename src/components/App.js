import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => (
  <div className="container-fluid">
    <div class="page-header">
  		<h1>Spartan to-do <small className="hidden-xs">Hello Spartan wellcome to our todo list</small></h1>
	</div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </div>
)

export default App
