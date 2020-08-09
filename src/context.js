import React, { Component } from 'react'
import items from './data'



const RoomContext=React.createContext();

class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true,
        minSize:0,
        type: "all",
        maxSize:0,
        minPrice:0,
        maxPrice:0,
        breakfast:false,
        capacity:1,
        price:0,
        pets:false
    };

    componentDidMount(){
     
     let rooms=this.formatData(items);
           
        let featuredRooms=rooms.filter(room=>room.featured===true);
        let maxPrice=Math.max(...rooms.map(item=>item.price));
        let maxSize=Math.max(...rooms.map(item=>item.size));
        this.setState({rooms,featuredRooms,sortedRooms:rooms,loading:false,price:maxPrice,maxPrice,maxSize});
    }

    formatData(items){
        let tempItems=items.map(item=>{
            let id=item.sys.id
            let images=item.fields.images.map(image=>image.fields.file.url);
            let room={...item.fields,images,id};
            return room;
        })
        return tempItems;
    }

    getRoom=(slug)=>{
        let tempRoom=[...this.state.rooms];
        const room=tempRoom.find(room=>room.slug===slug);
        return room;
    }

    handleChange=(event)=>{
        const target=event.target;
        const value=target.type==="checkbox"?target.checked:target.value;
        const name=event.target.name;
        this.setState({[name]:value},this.fiterRooms);
    }

    fiterRooms=()=>{
        let {rooms,breakfast,pets,minSize,maxSize,type,capacity,price}=this.state;
        //all the rooms
        let tempRooms=[...rooms];
        //transform values
        capacity=parseInt(capacity);
        //filter by type
        price=parseInt(price);
        if(type!=="all"){
            tempRooms=tempRooms.filter(room=>room.type===type);
        }
        //filter by capacity
        if(capacity!==1){
            tempRooms=tempRooms.filter(room=>room.capacity>capacity);
        }
        tempRooms=tempRooms.filter((room=>room.price<=price));
        tempRooms=tempRooms.filter((room=>room.size>=minSize && room.size<=maxSize));
        if(breakfast){
            tempRooms=tempRooms.filter((room=>room.breakfast===true));
        }
        if(pets){
            tempRooms=tempRooms.filter((room=>room.pets===true));
        }
        this.setState({sortedRooms:tempRooms})
      
    }
    
    render() {
        return (
           <RoomContext.Provider value={{...this.state,
            getRoom:this.getRoom,
            handleChange:this.handleChange}}>{this.props.children}</RoomContext.Provider>
        )
    }
}

const RoomConsumer=RoomContext.Consumer;
export {RoomContext,RoomProvider,RoomConsumer}