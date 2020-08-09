import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer, FaUmbrellaBeach} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
            icon:<FaCocktail/>,
            title:"Open Bar",
            info:"The Hangover last a day but memories last forever."
        },
        {
            icon:<FaUmbrellaBeach/>,
            title:"Beach",
            info:"A place of relaxation, peace and tranquility."
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:"Hike more, worry less."
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:"Take you for a trip."
        },
    ]
    }
    render() {
        return (
            <div>
                <section className="services">
                    <Title title="Services"></Title>
                    <div className="services-center">
                        {this.state.services.map((item,index)=>{
                            return(
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })}
                    </div>
                    </section>
                
            </div>
        )
    }
}
