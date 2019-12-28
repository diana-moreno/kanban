import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function({ status, title, modifier, index, id, onDeleteTask }) {
  return <>
    <Draggable draggableId={id} index={index} >
      {provided => (
        <li className='task task--doing'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3 className={`task__title task__title--${modifier}`}>{title}</h3>
          <i
            className="fas fa-times"
            onClick={() => { onDeleteTask(id, status) }}
          ></i>
        </li>
      )}
    </Draggable>
  </>
}