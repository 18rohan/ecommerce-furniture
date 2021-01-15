import React, { Component } from 'react'
import {
    Link,
  } from "react-router-dom";

//   import ICONS
import {FiShoppingCart} from 'react-icons/fi';
import {ImLeaf} from 'react-icons/im';
import {ReactComponent as ShoppingIcon} from '../images/truck.svg';
// FIREBASE
import {auth} from '../firebase/firebaseUtils';

// REDUX
import {connect} from 'react-redux';

// import CSS
import "../CSS/navbar_CSS.css";
const Navbar = (props) => {
    
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
                        props.currentUser ?
                        (
                            <div onClick={()=>{auth.signOut()}}><p>LOGOUT</p></div>        
                        ):
                        (
                            <div><p><Link to ="/login" >LOGIN</Link></p></div>
                        )
                    }
                    
                    <div className="cart-icon"><p><Link to ="/cart" ><span style={{fontSize:"20", color:'darkgreen'}}>9</span><ShoppingIcon className="cart-image" /></Link></p></div>
                    
                    
                    
                    </div>
                </div>
            </div>
        )
    }


const mapStateToProps = (state) =>({
    currentUser:state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);


