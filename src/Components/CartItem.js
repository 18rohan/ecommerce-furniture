import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { FaRupeeSign } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

// import CSS
import "../CSS/cartItem_CSS.css";

const CartItem = (props) => {
  const [count, setCount] = useState(0);
  const [price , setPrice] = useState(5000);
  const [totalprice , setTotalPrice] = useState(0);
  
  const PlusQuantity = () => {
    setCount(count + 1);
    setTotalPrice(count*(props.price));
  };
  
  const MinusQuantity = () => {
    setCount(count - 1);
    setTotalPrice(count*(props.price))
    if (count == 0) {
      setCount(count - 0);
    }
  };

  

  return (
    <div className="cart-item-box">
      <div className="image-container">
        <img src={props.image} className="image" />
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
      <div className="price">
        <p>
          <FaRupeeSign />
          {props.price}
        </p>
      </div>
      <div className="quantity">
        <button onClick={PlusQuantity}>
          <FiPlus />
        </button>
        <div className="quantity-box">
          <p>{count}</p>
        </div>

        <button onClick={MinusQuantity}>
          <FiMinus />
        </button>
      </div>
      <div className="total">

        <p><FaRupeeSign />{totalprice}</p>
      </div>
    </div>
  );
};

export default CartItem;
