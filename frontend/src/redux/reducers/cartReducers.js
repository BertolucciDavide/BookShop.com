import * as actionTypes from '../constants/cartConstants'; 

export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload; 
            const existItem = state.cartItems.find((x) => x.book === item.book); 
            if(existItem){
                return {
                    ...state, 
                    cartItems: state.cartItems.map((x) => x.book === existItem.book ? item : x) 
                }
            }
            else {
                return {
                    ...state, 
                    cartItems: [...state.cartItems, item], 
                }
            }
            
        case actionTypes.REMOVE_TO_CART: 
            return {
                ...state, 
                cartItems: state.cartItems.filter((x) => x.book !== action.payload)
            }
    
        default:
            return state; 
    }
}