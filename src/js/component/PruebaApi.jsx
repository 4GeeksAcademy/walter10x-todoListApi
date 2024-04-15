import React from 'react';

const PruebaApi = () => {
  function llamarTareas (){
    console.log("PruebaApi")
    fetch("https://playground.4geeks.com/todo/users/WalterTest")
    .then( (response) => response.json() )
    .then ((data) => console.log(data.todos))
  }

  // crear tareas 
  function crearTareas (){
  
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  "label": "Tarea desde REACT",
        "is_done": false })
    }; 
    fetch("https://playground.4geeks.com/todo/todos/WalterTest", requestOptions)
    .then ((data) => console.log(data))
  }


  // eliminar tareas  
  function eliminarTareas (){
  
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
    }; 
    fetch("https://playground.4geeks.com/todo/todos/9", requestOptions)
    .then( (response) => response.json() )
    .then ((data) => console.log(data))
  }
   
  return (
    <div className='text-center' >
      <h1 className='prueba12'>PruebaApi Component</h1>
      <button onClick={llamarTareas}>LLamar tareas</button>
      <button onClick={crearTareas}>crear  tareas</button>
      <button onClick={eliminarTareas}>eliminar  tareas</button>
    </div>
  );
};

export default PruebaApi;
