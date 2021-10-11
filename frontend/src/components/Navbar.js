import './Navbar.css'; 
import {Link} from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const NavBar = () => {

    const cart = useSelector(state => state.cart); 
    const {cartItems} = cart; 

    const getCartCount = () =>{
      return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <nav className="navbar">
      <div className="navbar__logo">
        
        <Link to="/"><h2>BookShop.com</h2></Link>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Carrello <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
    )
}

export default NavBar
