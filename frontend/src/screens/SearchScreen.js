import './SearchScreen.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book'; 
import {getBooks as listBooks } from '../redux/actions/bookActions'; 

const SearchScreen = () => {

    const dispatch = useDispatch(); 
    const getBooks = useSelector(state => state.getBooks); 
    const {books, loading, error} = getBooks; 
    
    useEffect(()=> {
        dispatch(listBooks()); 
    }, [dispatch])

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Gli ultimi prodotti</h2>

            <div className="homescreen__products">
                {loading ? <h2>Loading...</h2> :error ? <h2>{error}</h2> : books.map(book  => (
                    <Book key={book._id}  bookId={book._id}  title={book.title}  imageUrl={book.imageUrl}  author={book.author}  price={book.price}/>
                ))}
            </div>
        </div>
    )
}

export default SearchScreen
