import React, { useState, useEffect, useRef } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import './index.sass'
import Card from '../Card'
import logic from '../../logic'
const { createTask } = logic

export default function({ status, index, tasks, onCreateNewTask, onDeleteTask }) {
  const modifier = status.toLowerCase()
  const { token } = sessionStorage
  const [newCard, setNewCard] = useState(false)
  const [title, setTitle] = useState(null)

  useEffect(() => {
    setTitle(null)
    newCard && wrapperRef.current.focus()
  }, [newCard])

  function handleCreateCard() {
    setNewCard(true)
  }

  function handleCreateTask(event) {
    const title = event.target.value
    setTitle(title)
  }

  async function handleKeyDown(event) {
    if (event.key === 'Enter' && newCard) {
      !title && setNewCard(false)
      if (title) {
        const newTask = await createTask(token, status, title)
        onCreateNewTask(newTask, status)
      }
      setNewCard(false)
      setTitle(null)
    }
  }

  function useOutsideAlerter(ref) {
    async function handleClickOutside(event) {
      if (newCard && ref.current && !ref.current.contains(event.target)) {
        !title && setNewCard(false)
        if (title) {
          const newTask = await createTask(token, status, title)
          onCreateNewTask(newTask, status)
        }
        setNewCard(false)
        setTitle(null)
      }
    }

    useEffect(() => {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up (componentDidUnmount)
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return < >
    <li className={`tasks__column tasks__column-${modifier}`}>
      <h2 className='tasks__title'>{status}</h2>
      <ul className='tasks__task'>
        <li className={`task task__add task__add--${modifier}`} onClick={handleCreateCard}>
          <h3 className='task__title'>+ Add new card</h3>
        </li>
        {newCard && <li className={`task task--${modifier}`}>
          <input
            type='text'
            className={`task__title task__title--${modifier} task__new`}
            placeholder='Enter a title for this card'
            onChange={handleCreateTask}
            ref={wrapperRef}
            onKeyDown={handleKeyDown}
          />
        </li>}
        <Droppable droppableId={status} index={index} >
          {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tasks && tasks
                  .map((task, i) =>
                    <Card
                      status={status}
                      key={task._id}
                      title={task.title}
                      modifier={modifier}
                      index={i} id={task._id}
                      onDeleteTask={onDeleteTask}
                    />)
                }
                {provided.placeholder}
              </div>
            )}
        </Droppable>
      </ul>
    </li>
  </>
}
