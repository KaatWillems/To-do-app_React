import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { render } from '@testing-library/react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

//import Car from './Car.js'
//import ToDoForm from '../src/components/ToDoForm'


// function Garage () {
//   return (
//     <>
//       <h1> Who lives in my Tiny Garage?</h1>
//       <Car />
//     </>
//   )
// }

function ToDoContainer() {

  render() 
    return (
      <div>
  <Header /> 
  <ToDoList />
  <ShowTaskContainer />
  
  </div>

    )
}


function Header() {
  render()
  return (
    <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"/> 

    
  )
}






function ShowTaskContainer () {
  
    
    return (
      <div className="displaycontainer">
       <div><input type="checkbox"/>Static to do <span className="x"> x </span> </div> 
       <ToDoItem />
       
       </div>
    )


}


function ToDoItem () {

  render() 
  return (
    <div><input type="checkbox"/>{ToDoForm.input} <span className="x"> x </span> </div> 
  )

}





ReactDOM.render(<ToDoContainer />, document.getElementById('root'));




//ReactDOM.render(<Garage />, document.getElementById('root'));

