import React, { Component } from 'react'
import "../CSS/HeroSection_CSS.css";
export class HeroSection extends Component {
    render() {
        return (
            <div className="hero">
            <div className="hero-text">
            <h1>We got all your furniture needs covered!!</h1>
            <p>Furniture for every space in your house</p>
            </div>
            
            <img src="images/chair2.png" alt="chair" className="hero-image"/>
            
                
            </div>
        )
    }
}

export default HeroSection
