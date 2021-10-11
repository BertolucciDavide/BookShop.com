require('dotenv').config(); 
const express = require('express'); 
const connectDB = require('./config/db'); 

const booksRoutes = require('./routes/bookRoutes'); 



connectDB(); 

const app = express();  

app.use(express.json());
app.use('/api/books', booksRoutes) 


const PORT = process.env.PORT || 5000; 



app.listen(PORT, () => console.log('Server Running on', {PORT}))