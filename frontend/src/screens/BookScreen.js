import './BookScreen.css'

import {useState, useEffect} from 'react'; 
import {useDispatch, useSelector} from 'react-redux'; 

import { getBookDetails} from '../redux/actions/bookActions'; 
import { addToCart } from '../redux/actions/cartActions'; 


const BookScreen = ({match, history}) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch(); 
    
    const bookDetails = useSelector(state => state.getBookDetails); 
    const {loading, error, book} = bookDetails; 

    useEffect(() => {
      if (book && match.params.id !== book._id)
        dispatch(getBookDetails(match.params.id)); 
    }, [dispatch, book, match]); 


    const addToCartHandler = () => {
      dispatch(addToCart(book._id, qty));  
      history.push("/cart"); 
    }

    return (
        <div className="productscreen">
          {loading ? <h2>Loading...</h2> :error ? <h2>{error}</h2> :(
            <>
             <div className="productscreen__left">
            <div className="left__image">
              <img src={book.imageUrl} alt={book.t}/>
            </div>

            <div className="left__info">
              <p className="left__name">{book.title}</p>
              <p>Autore: {book.author}</p>
              <p>Prezzo: {book.price}$</p>
            </div>
          </div>

          <div className="productscreen__right">
              <div className="right__info">
                <p>Prezzo: 
                  <span>{book.price}$</span>
                </p>
                <p>Status: 
                  <span>{book.countInStock > 0 ? "Ordinabile" : "Non ordinabile"}</span>
                </p>
                <p>Qty <select value={qty} onChange={(e) => setQty(e.target.value)}>
                          {[...Array(book.countInStock).keys()].map((x) => (
                            <option key={x+1} value={x+1}>{x+1}</option>
                          ))}
                      </select>
                </p>
                <p> <button type="button" onClick={addToCartHandler}>Aggiungi al carrello</button></p>
            </div>
          </div>
            </> 
          )}
         
        </div>
    )
}

export default BookScreen
