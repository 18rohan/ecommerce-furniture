import React, { Component } from 'react'
import "../CSS/Home_CSS.css";

// importing Components
import HeroSection from '../Components/HeroSection';
import SmallCard from '../Components/smallCard';


// import dummy data 
import {homeObjOne, homeObjTwo, homeObjThree} from './ShopPage_data';


export default class Home extends Component {
    render() {
        return (
            <div className="home">
            
            <HeroSection/>
            <div className="row">
            <div className="intro-section">
            <h1>Get Awesome Products</h1>
                <p>Lorem ipsum dolor sit amet, omittam nam saepe tibique no, eum evertitur vero adversarium et.
                 Efficiantur consequuntur et evertitur. Cum ei omittam repudiare evertitur, habemus sententiae 
                 philosophia vel ex, ancillae ipsum dolor sit amet, apeirian repudiare evertitur te pri.</p>
            </div>
            </div>
            <div>
            <div className="item-list">
                <SmallCard {...homeObjOne}/>
                <SmallCard {...homeObjTwo}/>
                <SmallCard {...homeObjThree}/>
                <SmallCard {...homeObjTwo}/>
                <SmallCard {...homeObjThree}/>
                <SmallCard {...homeObjOne}/>
                
                </div>
            </div>
                
            </div>
        )
    }
}
