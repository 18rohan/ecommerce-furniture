import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  

// import CSS
import "../CSS/navbar_CSS.css";
export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="row nav-row">
                    <div className="logo-container">
                        <h1><span style={{fontSize:60}}>🍀</span>Furnature</h1>
                    </div>
                    <div className="icon-tray">
                    <p><div><Link to ="/home" >Home</Link></div></p>
                    <p><div><Link to ="/shop" >Shop</Link></div></p>
                    <p><div><Link to ="/login" >Login</Link></div></p>
                    
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
