import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


export default class App extends Component {
  state={
      items:[{
          id:1,
          title:"wakeup"
      },{
        id:2,
        title:"Make Breakfast"
    }],
    id:uuidv4(),
    item:"",
    editItem:false
  }

  handleChange=(e)=>{
    //  this.setState({[e.target.name]:e.target.value});
  }
  handleSubmit=()=>{
     
  }
  handleDelete=(id)=>{

  }
  handleEdit=(id)=>{

  }
  clearList=()=>{

  }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5">
                        <h3 className="text-center">Todo Input</h3>
                        <TodoInput item={this.state.item} handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit} editItem={this.state.editItem}></TodoInput>
                        <TodoList items={this.state.items} handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit} clearList={this.clearList}></TodoList>
                    </div>
                </div>
            </div>
         
        )
    }
}
