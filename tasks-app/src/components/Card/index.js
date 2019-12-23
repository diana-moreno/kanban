import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function({ title, modifier, index, id }) {
  return <>
    <Draggable draggableId={id} index={index} >
      {provided => (
        <li className='task task--doing'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3 className={`task__title task__title--${modifier}`}>{title}</h3>
        </li>
      )}
    </Draggable>
  </>
}