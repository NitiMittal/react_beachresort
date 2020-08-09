import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'

export default class Rooms extends Component {
    render() {
        return (
            <div>
                <Hero hero="roomsHero">
                    <Banner title="Our Rooms">
                        <Link to="/" className="btn-pri">Return To Home</Link>
                    </Banner>
                </Hero>
                <RoomsContainer></RoomsContainer>
            </div>
        )
    }
}
