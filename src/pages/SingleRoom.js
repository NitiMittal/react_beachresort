import React, { Component } from 'react'
import {RoomContext} from '../context'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import {defaultBcg} from '../images/room-1.jpeg'
import  StyledHero    from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
    };
    }
    static contextType = RoomContext;
    render() {
        const {getRoom}=this.context;
        const room=getRoom(this.state.slug);
        if(!room){
            return (
                <div className="error">
                    <h3>No such room could be found...</h3>
                    <Link to="/rooms" className="btn-pri">Back To Rooms</Link>
                </div>
            )
        }
        const {name,description,price,breakfast,size,extras,capacity,pets,images}=room;
        const [mainImg,...defaultBCG]=images
        return (
            <div>
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className="btn-pri">Back to Rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultBCG.map((item,index)=>{
                      return  <img key={index} src={item}></img>
                    })}
                </div>

                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>

                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ₹{price}</h6>
                        <h6>size:{size} SQFT</h6>
                        <h6>Max capacity: {capacity} {capacity>1?`people`:`person`}</h6>
                        <h6>{pets?"Pets Allowed":"Pets Not Allowed"}</h6>
                        <h6>{breakfast && "freebreakfast included"}</h6>
                    </article>
                </div>
            </section>

            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">{extras.map((item,index)=>{
                   return <li key={index}>- {item}</li>
                })}</ul>
                
            </section>
            </div>
        )
    }
}
