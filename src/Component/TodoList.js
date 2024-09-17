import React from 'react'
import Todo from "./Todo"

export default function TodoList({todos,Deletodo,updatetodo}) {
  return (
    <ul className="todo-list">
        {todos && todos.map((todo)=>{ 
        return <Todo key={todo.id} todo={todo} Deletodo={Deletodo} updatetodo={updatetodo}/>
     })}

    
  </ul>
  )
}
