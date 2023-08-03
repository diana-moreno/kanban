import React from 'react'
import './index.sass'
import { withRouter } from 'react-router-dom'

export default withRouter(function({ history, message, onBack, tasks, status, onDeleteTask, toggleEmptyTrashMode }) {

  function emptyTrash() {
    tasks.forEach(task => onDeleteTask(task._id, status))
    toggleEmptyTrashMode()
  }

  function goBack() {
    history.push('/tasks')
    toggleEmptyTrashMode()
  }

  return (
    <section className="modal">
      <div className='modal__container'>
        <div className={ 'modal__message'}>
          <p>{message}</p>
        </div>
        <div className='modal__button-container'>
          <button
            className='modal__button modal__button--cancel'
            onClick={goBack}
          >Cancel
          </button>
          <button
            className='modal__button modal__button--confirm'
            onClick={emptyTrash}
          >Confirm
          </button>
        </div>
      </div>
    </section>
  )
})
