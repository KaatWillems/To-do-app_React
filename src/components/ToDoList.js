import React from "react";
import ToDoForm from "./ToDoForm";
import { useState } from "react";


function ToDoList() {
    const [todos, setTodos] = useState([])

    const addToDo = todo => {
    //    if (!todo.text || /^\s*$.test(todo.text)){
    //        return
    //    } 

       const newTodos = [todo, ...todos]

       setTodos(newTodos)
       console.log(...todos)
    }

  return (
      <div>
   <h1>What's the plan for today?</h1>
   <ToDoForm />
   </div>
  )
}

export default ToDoList