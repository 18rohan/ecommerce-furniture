import React, { Component } from "react";
import ProductList from "../Components/ProductList";
import "../CSS/Home_CSS.css";
import "../CSS/ShopPage.css";
import "../CSS/cart_CSS.css";
// importing Components
import CartItem from '../Components/CartItem';

// import dummy data
import { SHOP_DATA } from "../Pages/ShopPage_data";

// importing react-redux dependencies
import {connect} from 'react-redux';



class Cart extends Component {
  constructor() {
    super();
  }

  render() {
    let CartItems = this.props.items.map((item)=>{
      return (<CartItem price={item.price} image={item.img} description={item.title}/>);
    })
    return (
      <div className="cartPage">
      <div className="container">
        <h1>YOUR CART</h1>
        {CartItems}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    items:state.cart.items
  }
}

export default connect(mapStateToProps)(Cart);