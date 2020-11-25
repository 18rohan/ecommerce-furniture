import React, { Component } from 'react'
import "../CSS/Home_CSS.css";
import "../CSS/ShopPage.css";
// importing Components
import HeroSection from '../Components/HeroSection';
import SmallCard from '../Components/smallCard';
import ProductList from '../Components/ProductList';

// import dummy data 
import {homeObjOne, homeObjTwo, homeObjThree} from '../Pages/ShopPage_data';


export default class Shop extends Component {
    render() {
        return (
            <div className="Shop">
                 <div className="row">
                    
                </div>
            
            <ProductList/>
            </div>
                
            
        )
    }
}
