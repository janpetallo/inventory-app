
const express = require('express');
const app = express(); // Import the express module to create an Express application

const path = require('path'); // Import the path module to handle file paths

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs'); // Set the view engine to EJS

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
const assetsPath = path.join(__dirname, 'assets'); 
app.use('/assets', express.static(assetsPath)); // Serve static files from the 'assets' directory

const homeRouter = require('./routes/homeRouter'); 
app.use('/', homeRouter); // Use the home router for routes starting with '/'

const categoriesRouter = require('./routes/categoriesRouter');
app.use('/categories', categoriesRouter); // Use the categories router for routes starting with '/categories'


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));