import './CartScreen.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem'; 
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {
    const dispatch= useDispatch(); 
    const cart = useSelector(state => state.cart); 
    const { cartItems } = cart;  

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    };


    const removeHandler = (id) => {
        dispatch(removeFromCart(id)); 
    }; 


    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0); 
    }; 

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0 ); 
    }; 


    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Carrello</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Il tuo carrello è vuoto
                        <Link to="/">Torna indietro</Link>
                    </div>
                ) : cartItems.map((item => (
                    <CartItem item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>
                )))}
            </div>

            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Totale ({getCartCount()}) libri</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Procedi al pagamento</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
