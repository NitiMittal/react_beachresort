import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid"
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


export default class App extends Component {
  
    render() {
        return (
          <div className="app">
              <TodoInput></TodoInput>
              <TodoList></TodoList>
         </div>
        )
    }
}
