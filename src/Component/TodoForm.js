import React, { useState } from 'react'

export default function TodoForm({addtodo}) {
 let [tital,settitle] = useState('');
 let handlesubmit=(e)=>{
    e.preventDefault();
    //add todo
    let todo ={
        id : Math.random(),
        tital,
        completed : false
    }
    addtodo(todo)

    //clear
    settitle('');
 }
  return (

    <form action="#" onSubmit={handlesubmit}>
    <input
      type="text"
      className="todo-input"
      placeholder="What do you need to do?"
      onChange={(e)=> settitle(e.target.value)} value={tital} 
    />
  </form>
  )
}
