import './reset.css';
import './App.css';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';
import CheckallandRemaing from './Component/CheckallandRemaing';
import TodoFilter from './Component/TodoFilter';
import ClearCompleteBtn from './Component/ClearCompleteBtn';
import { useCallback, useEffect, useState } from 'react';
function App() {
 
    let [todos,settodos]= useState([]);
    let [filterTodos,setfiltertodo]= useState(todos)
  useEffect(()=> {
    
    fetch('http://localhost:3001/todos').then((src)=>{
      if(!src.ok){
        throw Error("Some thing Wrong")
      }
      return src.json()
    }).then((todos)=>{
      settodos(todos)
      setfiltertodo(todos)
    })
  },[])

  let filterBy = useCallback( (filter)=>{
   
      if(filter==="All"){
        setfiltertodo(todos)
      }
      if(filter==="Active"){
        setfiltertodo(todos.filter(t => !t.completed))
      }
      if(filter==="Completed"){
        setfiltertodo(todos.filter(t => t.completed))
      }
    },[todos]
  )

  let addtodo =(todo)=>{
    //server side client
    fetch('http://localhost:3001/todos', {
      method: "POST",
      myHeaders :("Content-Type", "application/json"),
      body: JSON.stringify(todo),
    })

    //cliend data at client side
    settodos((prevState)=> {
     return [...prevState,todo]
    })
  }

  let Deletodo=(todoId)=>{
    fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "DELETE"
    } )


    //cliend server side
    settodos((prevState)=>{
      return prevState.filter((todo)=>{
        return todo.id!==todoId
      })
    })
  }
  let updatetodo=(todo)=> {
    fetch (`http://localhost:3001/todos/${todo.id}`, {
      method: "PATCH",
      myHeaders :("Content-Type", "application/json"),
      body: JSON.stringify(todo),
    })

    settodos((prveState)=>{
      return prveState.map((t)=>{
        if( t.id === todo.id){
          return todo
        }
          return t
        
        
      })
    })
  }
  let checkall=()=> {
    todos.forEach(t=>{
      t.completed= true;
      updatetodo(t);
    })



    settodos((prevStage)=>{
      return prevStage.map(t => {
       return {...t,completed : true}
    })
    } )
  }

  let learall= ()=>{
    
    todos.forEach(t=>{
      if(t.completed){
        Deletodo(t.id)
      }

    })

    settodos((prveState)=>{
      return prveState.filter(t=>!t.completed)})
  }  
    
  
  
  let countaingcheck = todos.filter(t => !t.completed).length;

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        {/* TodoForm */}
       <TodoForm addtodo={addtodo}/>
        {/* Todo list */}
        <TodoList todos={filterTodos} Deletodo={Deletodo} updatetodo={updatetodo}/>

         {/* checkAllAndRemaning */}
        <CheckallandRemaing countaingcheck={countaingcheck} checkall={checkall}/>

        <div className="other-buttons-container">
        {/* TodoFilters */}
        <TodoFilter filterBy={filterBy}/>

          {/* ClearCompleteBtn */}
        <ClearCompleteBtn learall={learall}/>
        </div>
      </div>
    </div>
  );
}

export default App;
