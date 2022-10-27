import React from "react";
import TaskListItem from "./TaskListItem";

const TaskList = ({ taskItems, toogleTask , showCompleted = false }) => {

  const taskListRow = (doneValue)=>{
    return (
      taskItems
      .filter( task => task.done === doneValue)
      .map((task, index) => (
        <TaskListItem key={index} task={task} toogleTask={toogleTask} />
      ))
    )
  }
  return (
    <section className="tasks">
      <h2>{showCompleted ? 'Tareas completadas' : 'Tareas Pendientes'}</h2>
      {
        taskListRow(showCompleted)
      }
    </section>
  );
};

export default TaskList;
