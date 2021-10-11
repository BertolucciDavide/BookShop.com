import "./Book.css"; 
import {Link} from 'react-router-dom'; 

const Book = ({imageUrl, title, author, price, bookId}) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={title}/>

            <div className="product__info">
                <p className="info__name">{title}</p>
                <p className="info__description">{author}</p>
                <p className="info__price">{price}$</p>

                <Link to={`/product/${bookId}`} className="info__button">
                    Più informazioni
                </Link>
            </div>

            
        </div>
    )
}

export default Book
