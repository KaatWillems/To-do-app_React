import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { render } from '@testing-library/react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';


function ToDoContainer() {

  render() 
    return (
      <div>
  <Header /> 
  <ToDoList />
    
  </div>

    )
}


function Header() {
  render()
  return (
    <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"/> 

    
  )
}




ReactDOM.render(<ToDoContainer />, document.getElementById('root'));

