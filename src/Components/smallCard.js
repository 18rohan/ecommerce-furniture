import React, { Component } from 'react'

import '../CSS/SmallCard_CSS.css';
export class smallCard extends Component {
    render() {
        return (
            <div className="SmallCard">
            <div className="image-container">
            <img src={this.props.image} className="smallCard-image"/>
            </div>
            <h1>Small Card</h1>
                
            </div>
        )
    }
}

export default smallCard
