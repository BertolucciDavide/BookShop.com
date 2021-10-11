const Book = require('../models/Book'); 

const getAllBooks = async(req, res) => {
    try {
        const books = await Book.find({});
        res.json(books); 
    } catch (error) {
        console.error(error); 
        res.status(500).json({message: "server error"}); 
    }
} 


const getBookByID = async(req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book); 
    } catch (error) {
        console.error(error); 
        res.status(500).json({message: "server error"}); 
    }
} 


module.exports = {getAllBooks, getBookByID}; 