const express = require('express'); 
const router = express.Router(); 

const {getAllBooks, getBookByID} = require('../controller/bookControllers');

//GET books from db 
router.get('/search', getAllBooks); 


//GET book by id from db 
router.get('/:id', getBookByID);  

module.exports = router; 