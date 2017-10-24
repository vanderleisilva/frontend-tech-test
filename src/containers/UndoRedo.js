import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button className="btn btn-default" onClick={onUndo} disabled={!canUndo}>
      <span class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span> Undo
    </button>&nbsp;
    <button className="btn btn-default" onClick={onRedo} disabled={!canRedo}>
      Redo <span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>
    </button>
  </p>
)

const mapStateToProps = (state) => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
