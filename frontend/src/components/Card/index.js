import React, { useState, useEffect, useRef } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './index.sass'

export default function({ status, title, modifier, index, id, onDeleteTask, onEditTask }) {

  const [isEditMode, setIsEditMode] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

useEffect(() => {
    // active focus when is editing a note
    isEditMode && ref.current.focus()
  }, [isEditMode])

  function enableEditNoteMode() {
    setIsEditMode(true)
  }

  function disableEditNoteMode() {
    setIsEditMode(false)
  }

  function handleDeleteNote() {
    onDeleteTask(id, status)
    disableEditNoteMode()
  }

  function handleEditNote() {
    title !== newTitle && onEditTask(id, newTitle)
  }

  function editDescription(event) {
    setNewTitle(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleEditNote()
      disableEditNoteMode()
    }
  }

  function useOutside(ref) {
    function handleClickOutside(event) {
      if (ref.current
        && !ref.current.contains(event.target)
        && event.target.getAttribute('name') !== 'delete'
      ){
        handleEditNote()
        disableEditNoteMode()
      }
    }
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    })
  }

  const ref = useRef(null)
  useOutside(ref)

  return < >
    <Draggable draggableId={id} index={index}>
      {provided => <>

        { !isEditMode &&
          <li className='task'
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={() => enableEditNoteMode()}
          >
            <h3
              className={`task__title task__title--${modifier}`}
            >{title}</h3>
          </li>
        }
      </>
      }
    </Draggable>

    { isEditMode &&
      <li className={`task task__edit-mode task__edit-mode--${modifier}`}>
        <input
          type='text'
          className={`item__input task__title--${modifier}`}
          value={newTitle}
          onKeyDown={handleKeyDown}
          onChange={editDescription}
          ref={ref}
        />
        <i
          name='delete'
          className='material-icons item__delete'
          onClick={handleDeleteNote}
        >clear</i>
      </li>
    }

    </>
}
