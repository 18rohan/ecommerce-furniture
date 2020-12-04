import React, { Component, useState } from "react";
import "../CSS/Home_CSS.css";
import "../CSS/ShopPage.css";
// importing Components
// import HeroSection from "../Components/HeroSection";
import SmallCard from "../Components/smallCard";

// import dummy data
// import {homeObjOne, homeObjTwo, homeObjThree, SHOP_DATA} from '../Pages/ShopPage_data';

const ProductList = ({ title, items }) => {
  {
    items.map((item) => {
      console.log("NAMES: ", item.name);
    });
  }

  return (
    <div>
      <div className="category-heading">
        <h1>{title}</h1>
      </div>
      <div className="item-list">
        {
            items.map((item)=>{
                return (<SmallCard key={item.id} name={item.name} image={item.imageUrl} price={item.price}/>);
            })
        }
      </div>
    </div>
  );
};

export default ProductList;
