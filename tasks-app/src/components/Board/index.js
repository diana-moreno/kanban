import React, {useState, useEffect} from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import './index.sass'
import Column from '../Column'
/*import logic from '../../logic'
const { listColumns, changePosition } = logic*/
import listColumns from '../../logic/list-columns'
import changePosition from '../../logic/change-position'
import createColumns from '../../logic/create-columns'

export default function ({ user, onLogout }) {
/*  const columns = ['TODO', 'DOING', 'REVIEW', 'DONE']*/

  const { token } = sessionStorage
  const [columns, setColumns] = useState()
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    (async () => {
      try {
debugger
        await createColumns(token)
        const columns = await listColumns(token)
        setColumns(columns)

      } catch ({ message }) {
        console.log(message)
    /*    setNotification({ error: true, message })*/
      }
    })()
  }, [update])

  async function onDragEnd(result) {
    const { destination, source, draggableId } = result;
    setUpdate(false)
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns.filter(elem => elem.status === source.droppableId)
    const finish = columns.filter(elem => elem.status === destination.droppableId)

    let copyColumns = [...columns]
    // moving the task inside the same list
    if(start[0].id === finish[0].id) {
      const indexColumn = columns.findIndex(elem => elem.status === source.droppableId)
      const newTaskIds = Array.from(start[0].tasks);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      copyColumns[indexColumn].tasks = newTaskIds

      setColumns(copyColumns)

      await changePosition(token, copyColumns[indexColumn])
      setUpdate(true)
      return
    }

    // moving the task between lists
    const indexStartColumn = columns.findIndex(elem => elem.status === source.droppableId)
    const startTaskIds = Array.from(start[0].tasks)
    startTaskIds.splice(source.index, 1)

    const indexFinishColumn = columns.findIndex(elem => elem.status === destination.droppableId)
    const finishTaskIds = Array.from(finish[0].tasks)
    finishTaskIds.splice(destination.index, 0, draggableId)

    copyColumns[indexStartColumn].tasks = startTaskIds
    copyColumns[indexFinishColumn].tasks = finishTaskIds

    setColumns(copyColumns)

    await changePosition(token, copyColumns[indexStartColumn])
    await changePosition(token, copyColumns[indexFinishColumn])
    setUpdate(true)
  }

    return <>
      <header>
        <h1>Tasksboard</h1>
      </header>
      <main>
        <DragDropContext onDragEnd={onDragEnd}>
          <ul className='tasks'>
            {columns && columns.map((elem, i) =>
              <Column key={elem.status} status={elem.status} index={i} tasks={elem.tasks} update={update} />
            )}
          </ul>
        </DragDropContext>
      </main>
    </>
}