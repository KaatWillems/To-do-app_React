import React from "react";
import ToDoForm from "./ToDoForm";
import { useState } from "react";
import ToDo from "./ToDo";


function ToDoList() {
    const [todos, setTodos] = useState([])

    const addToDo = todo => { 
       const newTodos = [todo, ...todos]

       setTodos(newTodos)    
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    };

    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    };

  return (
      <div>
   <h1>What's the plan for today?</h1>
   <ToDoForm onSubmit={addToDo} />
   <ToDo 
   todos={todos}
   completeTodo={completeTodo}
   removeTodo={removeTodo}
   updateTodo={updateTodo}/>
   </div>
  )
}

export default ToDoList