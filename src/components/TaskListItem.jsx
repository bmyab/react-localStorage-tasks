import React from 'react'

const TaskListItem = ({task , toogleTask}) => {
  return (
    <div className='list-item'>
      <h3>{task.name}</h3>
      <input 
      type="checkbox"
      checked={task.done}
      onChange={()=>toogleTask(task)}
      />
    </div>
  )
}

export default TaskListItem
