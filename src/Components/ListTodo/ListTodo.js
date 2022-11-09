
import React from 'react'

const ListTodo = ({task,index,removeTask}) => {
  return (
    <>
    <div className='list-todo'> {task.title }

        <button className='delete-btn' onClick={removeTask} >Delete</button>
    </div>

    
    </>
  )
}

export default ListTodo
