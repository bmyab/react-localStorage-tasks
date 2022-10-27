import React  , { useState }from "react";

const TaskCreator = ({crearTarea}) => {

  const [task, setTask] = useState("");


  const handleChange = ({target}) => {
    setTask(target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask('')
    crearTarea(task)
  };
  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        className="input"
        onChange={handleChange}
        type="text"
        placeholder="ingrese una nueva tarea"
        value={task}
      />

      <button className="btn btn-primary btn-lg">
        Guardar Tarea
      </button>
    </form>
  );
};

export default TaskCreator;
