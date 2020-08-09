import React from 'react'
import RoomsList from './RoomsList'
import RoomsFilter from './RoomsFilter'
import {RoomConsumer} from '../context'
import Loading from './Loading'

export default function RoomsContainer() {
    return (
       <RoomConsumer>
           {
               (value)=>{
                   const {loading,sortedRooms,rooms}=value;
                   if(loading){
                       return <Loading></Loading>
                   }
                   return(
                       <div>
                           <RoomsFilter rooms={rooms}></RoomsFilter>
                           <RoomsList rooms={sortedRooms}></RoomsList>
                       </div>
                   )
               }
           }
       </RoomConsumer>
    )
}
