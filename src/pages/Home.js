import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms starting at ₹799">
                        <Link to="/rooms" className="btn-pri">Our Rooms</Link>
                    </Banner>
                </Hero>
                <Services></Services>
                <FeaturedRooms></FeaturedRooms>
               
            </div>
        )
    }
}
