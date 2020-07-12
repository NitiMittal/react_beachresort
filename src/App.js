import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


export default class App extends Component {
  state={
    items:[],
    id:uuidv4(),
    item:"",
    editItem:false
  }

  handleChange=(e)=>{
    this.setState({item:e.target.value});
  }
  handleSubmit=(e)=>{
     e.preventDefault();
     const newItem={
         id:this.state.id,
         title:this.state.item
     }
     const updatedItem=[...this.state.items,newItem];
     this.setState({item:"", id:uuidv4(),items:updatedItem,editItem:false},()=>console.log(this.state));
  }
  handleDelete=(id)=>{
    const filteredItems=this.state.items.filter(item=>item.id!==id);
    this.setState({items:filteredItems})
  }
  handleEdit=(id)=>{
    const filteredItems=this.state.items.filter(item=>item.id!==id);
    const SelectedItem=this.state.items.find(item=>item.id===id);
    this.setState({
        items:filteredItems,
        item:SelectedItem.title,
        id:id,
        editItem:true
    })
  }
  clearList=()=>{
    this.setState({items:[]});
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
