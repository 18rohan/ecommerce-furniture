import React, { Component } from "react";
import ProductList from "../Components/ProductList";
import "../CSS/Home_CSS.css";
import "../CSS/ShopPage.css";

// importing REDUX
import {connect} from 'react-redux';


// import dummy data

import {
  SHOP_DATA,
} from "../Pages/ShopPage_data";

 class Shop extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
    console.log(this.state);
  }

  render() {
    const { collections } = this.state;
    collections.map((collection) => {
    //   console.log("TITLES:", collection.title);
    //   console.log("ITEMS: ", collection);
    });

    return (
      <div className="Shop">
        <div className="super-heading">
          <h1>COLLECTIONS</h1>
        </div>
        {
            collections.map((collection)=>{
                return (<ProductList key={collection.id} {...collection}/>);
            })
        }
        
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    items:state.cart.items
  }
}


export default connect(mapStateToProps)(Shop);