import React, { Component } from 'react'

import '../CSS/SmallCard_CSS.css';
export class smallCard extends Component {
    render() {
        return (
            <div className="SmallCard">
            <div className="content">
            <div className="image-container">
            <img src={this.props.image} className="smallCard-image"/>
            </div>
            <div className="product-info">
            <h1>{this.props.price}</h1>
            </div>
            </div>
            </div>
        )
    }
}

export default smallCard
