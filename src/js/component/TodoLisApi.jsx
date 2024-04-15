import React, { useState, useEffect } from "react";

const TodoListApi = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []); 

  const fetchTasks = () => {
    fetch("https://playground.4geeks.com/todo/users/WalterTest")
      .then(response => response.json())
      .then(data => setTasks(data.todos))
      .catch(error => console.error('Error al cargar las tareas:', error));
  };

  const createTask = () => {
    if (task.trim() !== "") {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "label": task, "is_done": false })
      };
      fetch("https://playground.4geeks.com/todo/todos/WalterTest", requestOptions)
        .then(response => response.json())
        .then(data => {
          setTasks([...tasks, data]);
          setTask(""); // Limpiar el input después de crear la tarea
        })
        .catch(error => console.error('Error al crear la tarea:', error));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      createTask();
    }
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
    deleteTask(taskId);
  };

  const deleteTask = (taskId) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`https://playground.4geeks.com/todo/todos/${taskId}`, requestOptions)
      .catch(error => console.error('Error al eliminar la tarea:', error));
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  let countMessage;
  if (tasks.length === 0) {
    countMessage = "añadir task";
  } else {
    countMessage = `${tasks.length}`;
  }

  return (
    <>
      <div className="padre">
        <h1>Todos</h1>
        <div className="text-center">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div>
            {tasks.map((task, index) => (
              <div
                className="task-item"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <p className="task-text">{task.label}</p>
                {hoveredIndex === index && (
                  <span
                    className="delete-icon"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <i className="bi bi-x-lg"></i>
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="count-task">Item Left {countMessage}</p>
        </div>

        <div className="sheet1">.</div>
        <div className="sheet2">.</div>
      </div>
    </>
  );
};

export default TodoListApi;
