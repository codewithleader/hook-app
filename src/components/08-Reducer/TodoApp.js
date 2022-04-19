import React, { useReducer } from 'react';
import { toDoReducer } from './toDoReducer';

import './styles.css';

const inicialState = [ {
 id: new Date().getTime(),
 desc: 'Aprender inglés',
 done: false,
}]

export const TodoApp = () => {
 const [ toDos, dispatch ] = useReducer(toDoReducer, inicialState);

 console.log(toDos);

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log('object');

  const newTodo = {
   id: new Date().getTime(),
   desc: 'Nueva tarea',
   done: false,
   };
   
   const action = {
     type: 'add',
     payload: newTodo,
   }

   dispatch(action);
 }
 

  return (
   <div>
    <h1 className='text-center'>ToDo App ( { toDos.length } )</h1>
    <hr />

   <div className="row">
     <div className="col-7">
      <h4 className='text-center'>To-Do List</h4>
      <hr />
     <ul className='d-grid gap-2 list-group list-group-flush'>
       {
        toDos.map((todo, i) => (
         <li key={ todo.id } className="dk-bgc list-group-item">
          <p className="text-center">
           {todo.desc}
          </p>
          <button className="btn btn-danger">Delete</button>
         </li>
        ))
      }
     </ul>
     </div>
     <div className="col-5">
      <h4 className='text-center'>Add To-Do</h4>
      <hr />

      <form
       className="d-grid gap-2"
       onSubmit={ handleSubmit }
      >
       <input
        autoComplete='off'
        className='form-control inp-elis'
        name="description"
        placeholder='Learn...'
        type="text"
       />
       <button
        className="btn-elis btn btn-outline-primary"
        type='submit'
       >
        Add
       </button>
       
      </form>
     </div>
   </div>
   </div>
  )
}
