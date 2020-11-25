import React, { Component } from 'react'
import "../CSS/Home_CSS.css";
import "../CSS/ShopPage.css";
// importing Components
import HeroSection from '../Components/HeroSection';
import SmallCard from '../Components/smallCard';


// import dummy data 
import {homeObjOne, homeObjTwo, homeObjThree} from '../Pages/ShopPage_data';


export default class ProductList extends Component {
    render() {
        return (
            <div>
            <div className="category-heading">
            <h1>SOFAS</h1>
        </div>
            <div className="item-list">
                <SmallCard {...homeObjOne}/>
                <SmallCard {...homeObjTwo}/>
                <SmallCard {...homeObjThree}/>
                <SmallCard {...homeObjTwo}/>
                <SmallCard {...homeObjThree}/>
                <SmallCard {...homeObjOne}/>
                
                </div>
                </div>
           
        )
    }
}
