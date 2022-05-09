import React from "react";
import { useState, useEffect, useRef } from "react";


function ToDoForm(props) {
    
  // if you click edit the inputfield willoodo will be already entered in the inputfield, so you can easy edit it. 
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  

    //when you refresh the page, the cursor is already in the input field:
    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    })



    const handleChange = e => {
      setInput(e.target.value)
    }
      
    
    const handleSubmit = (event) => {
        //pagina niet altijd laten refreshen na submit:
      event.preventDefault();

      //alert(`The task you entered was: ${input}`)
      
      props.onSubmit({
        id: Math.floor(Math.random()* 10000), 
        text: input
      });

    // !!!laat input terug leeg zijn na je iets hebt gesubmit:
      setInput("")

    }  
  
    return (
      <form  onSubmit={handleSubmit}>
        {props.edit ? ( 
        <> <input
            className="inputtodo input"
            placeholder="Update the to do"
            type="text" 
            value={input}
            onChange={handleChange}
            ref={inputRef} // to put the cursor in the inputfield on refresh
          />        
        <button className="todo-button">Update</button> 
        </> ) 
        : 
        <> <input
            className="addtodo input"
            placeholder="Add a to do"
            type="text" 
            value={input}
            onChange={handleChange}
            ref={inputRef} // to put the cursor in the inputfield on refresh
          />
        
        <button className="todo-button">Add</button> 
        </>}

        
      </form>
    )
  }


  export default ToDoForm;