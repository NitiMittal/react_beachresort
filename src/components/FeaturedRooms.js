import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from './Loading';
import Title from './Title'
import Room from './Room'
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {loading,featuredRooms:rooms}=this.context;
        rooms=rooms.map(room=>{
            return <Room key={room.id} room={room}></Room>
        })
        return (
            <div className="featured-rooms">
                <Title title="Featured Rooms"></Title>
                <div className="featured-rooms-center">
                    {loading?<Loading></Loading>:rooms}
                </div>
                
            </div>
        )
    }
}
