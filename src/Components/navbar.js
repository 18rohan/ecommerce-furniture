import React, { Component } from 'react'
import {
    Link,
  } from "react-router-dom";
//   import DropdownButton from 'react-bootstrap/DropdownButton'
//   import Dropdown from 'react-bootstrap/Dropdown'
import {FiShoppingCart} from 'react-icons/fi';
import {ImLeaf} from 'react-icons/im';
import {auth} from '../firebase/firebaseUtils';
// import CSS
import "../CSS/navbar_CSS.css";
export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="row nav-row">
                    <div className="logo-container">
                        <h2><ImLeaf/>Furnature</h2>
                    </div>
                    <div className="icon-tray">
                    <div><p><Link to ="/home" >HOME</Link></p></div>
                    <div><p><Link to ="/shop" >SHOP</Link></p></div>
                    {
                        this.props.currentUser ?
                        (
                            <div onClick={()=>{auth.signOut()}}><p>LOGOUT</p></div>        
                        ):
                        (
                            <div><p><Link to ="/login" >LOGIN</Link></p></div>
                        )
                    }
                    
                    <div><p><Link to ="/cart" ><FiShoppingCart size={35}/></Link></p></div>
                    
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar


