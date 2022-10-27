import React from "react";

const VisibilityControl = ({ setShowCompleted, cleanTask, isChecked }) => {
  const handleDelete = () => {
    if (window.confirm("¿Seguro de quere eliminar las tareas?")) {
      cleanTask();
    }
  };

  return (
    <div className="form-check form-switch pt-5 d-flex justify-content-center align-items-center gap-4">
      <input
        className="form-check-input"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={isChecked}
        type="checkbox"
        onChange={(e) => setShowCompleted(e.target.checked)}
      />

      <label className="form-check-label " for="flexSwitchCheckDefault">
        Mostrar
      </label>

      <button className="btn btn-danger btn-lg mx-5 " onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
};

export default VisibilityControl;
