import React, { useState } from "react";

const TodoListApi = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
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
                <p className="task-text">{task}</p>
                {hoveredIndex === index && (
                  <span
                    className="delete-icon"
                    onClick={() => handleDeleteTask(index)}
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
