import React from "react";
import { useState } from "react";


function ToDoForm(props) {
    const [input, setInput] = useState("");
  
    const handleChange = e => {
      setInput(e.target.value)
    }
      
    
    const handleSubmit = (event) => {
        //pagina niet altijd laten refreshen na submit:
      event.preventDefault();
      
      //alert(`The task you entered was: ${input}`)
      
    //   props.onSubmit({
    //     id: Math.floor(Math.random()* 10000), 
    //     text: input
    //   });

    // !!!laat input terug leeg zijn na je iets hebt gesubmit:
      setInput("")

    }  
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Add to do: 
         <input
            className="inputtodo"
            placeholder="Add a to do"
            type="text" 
            value={input}
            onChange={handleChange}
          />
        </label>
        <button className="todo-button">Add</button>
      </form>
    )
  }


  export default ToDoForm;