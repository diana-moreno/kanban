import React, {useState, useEffect, useRef} from 'react'
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card'
/*import logic from '../../logic'
const { createTask, listTasks } = logic*/
import createTask from '../../logic/create-task'
import listTasks from '../../logic/list-tasks'

export default function ({status, index, update}) {
  const modifier = status.toLowerCase()
  const { token } = sessionStorage
  const [tasks, setTasks] = useState([])
  const [newCard, setNewCard] = useState(false)
  const [title, setTitle] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        let tasks = await listTasks(token)
        let statusTasks = tasks.filter(column => column.status === status)

        setTasks(statusTasks[0].tasks)
        setTitle(null)
      } catch ({ message }) {
        console.log(message)
    /*    setNotification({ error: true, message })*/
      }
    })()
  }, [update, newCard])

  function handleCreateCard() {
    setNewCard(true)
  }

  async function handleCreateTask(event) {
    const title = event.target.value
    setTitle(title)
  }

// no entiendo bien esta función, especialmente la segunda parte
  function useOutsideAlerter(ref) {
    async function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        !title && setNewCard(false)
        title && await createTask(token, status, title)
        setNewCard(false)
        setTitle(null)
      }
    }

    useEffect(() => {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);


  return <>

      <li className={`tasks__column tasks__column-${modifier}`}>
        <h2 className='tasks__title'>{status}</h2>
        <ul className='tasks__task'>
          <li className={`task task__add task__add--${modifier}`} onClick={handleCreateCard}>
            <h3 className='task__title'>+ Add new card</h3>
          </li>
          {newCard && <li className={`task task--${modifier}`}>
            <input type='text' className={`task__title task__title--${modifier} task__new`} placeholder='Enter a title for this card' onChange={handleCreateTask} ref={wrapperRef}/>
          </li>}

        <Droppable droppableId={status} index={index} >

          {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tasks && tasks
                  .map((task, i) => <Card key={task._id} title={task.title} modifier={modifier} index={i} id={task._id} />)
                }
                {provided.placeholder}
              </div>
            )}

        </Droppable>
        </ul>
      </li>

  </>
}