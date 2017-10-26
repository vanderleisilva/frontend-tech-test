import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button className="btn btn-default" onClick={onUndo} disabled={!canUndo}>
      <span className="glyphicon glyphicon-triangle-left" aria-hidden="true"></span> Undo
    </button>&nbsp;
    <button className="btn btn-default" onClick={onRedo} disabled={!canRedo}>
      Redo <span className="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>
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

export { UndoRedo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)
