import React from 'react'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar';
import './container.css'
import HotelView from '../Hotel-view/HotelView';
import HotelInfo from '../hotel-info/HotelInfo';
import Cta from '../cta/Cta';

const Container = () => {
    return (
        <div className="container">
            <Header/>
            <SideBar/>
            <HotelView/>
            <HotelInfo/>
            <Cta/>
        </div>
    )
}

export default Container