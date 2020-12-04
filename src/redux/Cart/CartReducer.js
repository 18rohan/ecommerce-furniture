import React from 'react'

import Item1 from '../../images/sofa3.png';
import Item2 from '../../images/sofa4_png.png';
import Item3 from '../../images/sofa5_png.png';
import Item4 from '../../images/greyChair1.png';
import Item5 from '../../images/chair2.png';
import Item6 from '../../images/chair3.png';
import Item7 from '../../images/chair6.png';
import Item8 from '../../images/sofa6_png.png';
import Item9 from '../../images/chandelier.png';

// importing ACTIONS
import ADD_TO_CART  from '../Cart/cartActions';

// Declaring initial state
const initialState = {
    items:[
        {id:1,title:'Green Sofa', desc: "A green sofa for living room", price:50000,img:Item1,quantity:0},
        {id:2,title:'Brown Sofa', desc: "A Brown sofa for living room", price:60000,img:Item2,quantity:0},
        {id:3,title:'White Sofa', desc: "A White sofa for living room", price:80000,img:Item3,quantity:0},
        {id:4,title:'Grey Chair', desc: "A Grey Chair for living room", price:80000,img:Item4,quantity:0},
        {id:5,title:'Black Chair', desc: "A Black Chair for living room", price:43000,img:Item5,quantity:0},
        {id:6,title:'Orange Chair', desc: "A Orange Chair for living room", price:65000,img:Item6,quantity:0},
        {id:7,title:'Pink Chair', desc: "A Pink Chair for living room", price:43000,img:Item7,quantity:0},
        {id:8,title:'Modern Sofa', desc: "A Modern sofa for living room", price:120000,img:Item8,quantity:0},
        {id:9,title:'Chandelier', desc: "A Chandelier for living room", price:8120,img:Item9,quantity:0},
    ],
    totalQuantity:0,
    addedItems:[],
    total:0
}

const CartReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_CART": 
            let addedItem = state.items.find(item => item.id === action.id)
        
            // Check if the action id exists in the added Items
        let existedItems = state.addedItems.find(item => action.id  === item.id ) 
            let newTotal = state.total + addedItem.price;
            return {
                ...state,
                addedItems:[...state.addedItems,addedItem],
                total:newTotal
            }
        
        default:
            return state;
    }
    
    
    
}


export default CartReducer;