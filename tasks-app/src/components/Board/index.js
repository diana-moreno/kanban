import React, {useState, useEffect} from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import './index.sass'
import Column from '../Column'
import logic from '../../logic'
const { listColumns, changePosition, createColumns, deleteTask, editTask } = logic

export default function ({ user, onLogout, onBack }) {
  const { token } = sessionStorage
  const [columns, setColumns] = useState()
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    (async () => {
      await createColumns(token)
      const columns = await listColumns(token)
      setColumns(columns)
      setUpdate(false)
    })()
  }, [update])

  async function onDragEnd(result) {
    const { destination, source, draggableId } = result
    setUpdate(false)
    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = columns.filter(elem => elem.status === source.droppableId)
    const finish = columns.filter(elem => elem.status === destination.droppableId)

    let copyColumns = [...columns]
    // moving the task inside the same list
    if(start[0].id === finish[0].id) {
      const indexColumn = columns.findIndex(elem => elem.status === source.droppableId)
      const newTaskIds = Array.from(start[0].tasks);
      const moveMe = newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, moveMe[0]);

      copyColumns[indexColumn].tasks = newTaskIds

      setColumns(copyColumns)

      await changePosition(token, copyColumns[indexColumn])
      setUpdate(true)
      return
    }

    // moving the task between lists
    const indexStartColumn = columns.findIndex(elem => elem.status === source.droppableId)
    const startTaskIds = Array.from(start[0].tasks)
    const move = startTaskIds.splice(source.index, 1)

    const indexFinishColumn = columns.findIndex(elem => elem.status === destination.droppableId)
    const finishTaskIds = Array.from(finish[0].tasks)
    finishTaskIds.splice(destination.index, 0, move[0])

    copyColumns[indexStartColumn].tasks = startTaskIds
    copyColumns[indexFinishColumn].tasks = finishTaskIds

    setColumns(copyColumns)

    await changePosition(token, copyColumns[indexStartColumn])
    await changePosition(token, copyColumns[indexFinishColumn])
    setUpdate(true)
  }

  function handleCreateNewTask(newTask, status) {
    const index = columns.findIndex(elem => elem.status === status)
    columns[index].tasks.push(newTask)
    setColumns(columns)
  }

  async function handleDeleteTask(taskId, status) {
    try {
      await deleteTask(token, taskId, status)
      setUpdate(true)
    } catch(error) {
      console.log(error.message)
    }
  }

  async function handleEditTask(taskId, newTitle) {
    try {
      await editTask(token, taskId, newTitle)
      setUpdate(true)
    } catch(error) {
      console.log(error.message)
    }
  }

  return <>
    <header>
      <h1>Kanban</h1>
      <h2 onClick={onLogout}>Logout</h2>
      <i onClick={onLogout} className="fas fa-sign-out-alt"></i>
    </header>
    <main>
      <DragDropContext onDragEnd={onDragEnd}>
        <ul className='tasks'>
          {columns && columns
            .sort((a, b) => a.index - b.index)
            .map((elem, i) =>
              <Column
                key={elem.status}
                status={elem.status}
                index={i}
                tasks={elem.tasks}
                onCreateNewTask={handleCreateNewTask}
                onDeleteTask={handleDeleteTask}
                onEditTask={handleEditTask}
                onBack={onBack}
              />
            )
        }
        </ul>
      </DragDropContext>
    </main>
  </>
}
