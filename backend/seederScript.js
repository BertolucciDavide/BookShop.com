require('dotenv').config(); 

const booksData = require('./data/books'); 
const connectDB = require('./config/db'); 
const Book = require('./models/Book'); 

connectDB(); 

const importData = async () => {
    try {
        await Book.deleteMany({}); 
        await Book.insertMany(booksData);

        console.log("Data import success"); 

        process.exit(); 
    } catch (error) {
        console.error("Error with data import success"); 
        process.exit(1); 
    }
}

importData(); 