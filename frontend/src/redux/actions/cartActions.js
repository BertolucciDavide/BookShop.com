import * as actionTypes from '../constants/cartConstants'; 
import axios from 'axios'; 

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const {data} = await axios.get("/api/books/"+id);     
    dispatch({
        type: actionTypes.ADD_TO_CART, 
        payload: {
            book: data._id, 
            title: data.title, 
            imageUrl: data.imageUrl, 
            price: data.price, 
            countInStock: data.countInStock, 
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems)); 
}; 


export const removeFromCart = (id) => async(dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_TO_CART, 
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems)); 
}