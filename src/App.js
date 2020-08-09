import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import {RoomProvider} from './context'



export default class App extends Component {
  
    render() {
        return (
            <RoomProvider>
                <BrowserRouter>
            <Navbar></Navbar>
             <Switch>
             <Route exact path="/" component={Home}></Route>
                <Route exact path="/rooms" component={Rooms}></Route>
                <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
                <Route component={Error}></Route>
             </Switch>
                
          </BrowserRouter>
            </RoomProvider>
            
           
         
        )
    }
}
