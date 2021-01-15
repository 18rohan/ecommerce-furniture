import React from 'react';

// importing ACTIONS
import {ADD_WISHLIST_ITEM} from './wishListActions';

const initialState = {
    wishlistItems : []
}


const WishListReducer = (state= initialState, action) =>{
    switch(action.type) {
        case ADD_WISHLIST_ITEM:
            return {
                ...state,
                wishlistItems: [...state.wishlistItems, action.payload]
            }
        default:
            return state;
    }
}

export default WishListReducer;