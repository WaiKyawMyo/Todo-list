import React, { useState } from 'react'

export default function Todo({todo,Deletodo,updatetodo}) {
    let [edit,setedit]=useState(false)
    let trueorfalse=()=>{
        setedit(true)
    }
    
    let [change,setchange]=useState(todo.tital)
    let EditHandal=(e)=> {
       e.preventDefault()
       let updateTODOLis ={
        id: todo.id,
        tital : change,
        completed : todo.completed

       }
       updatetodo(updateTODOLis)
       setedit(false)
    }
    let checkHandle=()=>{
        let updateTODOLis ={
            id: todo.id,
            tital : change,
            completed : !todo.completed
    
           }
           updatetodo(updateTODOLis)
    }
  return (
    <li  className="todo-item-container">
             <div className="todo-item">
                 <input type="checkbox" checked={todo.completed} onChange={checkHandle}/>
                 
                 {!edit && <span className={`todo-item-label ${todo.completed ? 'line-through' : ''}`} onDoubleClick={trueorfalse}>{todo.tital}</span>}
                 <form onSubmit={EditHandal}>
                 {edit && 
                  <input type="text" className="todo-item-input" onChange={(e)=>setchange(e.target.value)} value={change} />
                  
                  }
                 </form>
             </div>
             <button onClick={()=>Deletodo(todo.id)}  className="x-button">
                 <svg
                 className="x-button-icon"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 >
                 <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M6 18L18 6M6 6l12 12"
                 />
                 </svg>
             </button>
      </li> 
    
  )
}
