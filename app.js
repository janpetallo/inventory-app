const express = require('express');
const app = express(); // Import the express module to create an Express application

const path = require('path'); // Import the path module to handle file paths

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs'); // Set the view engine to EJS

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
const publicPath = path.join(__dirname, 'public'); 
app.use(express.static(publicPath)); // Serve static files from the 'public' directory

const homeRouter = require('./routes/homeRouter'); 
app.use('/', homeRouter); // Use the home router for routes starting with '/'

const categoriesRouter = require('./routes/categoriesRouter');
app.use('/categories', categoriesRouter); // Use the categories router for routes starting with '/categories'

const artistsRouter = require('./routes/artistsRouter');
app.use('/artists', artistsRouter); // Use the artists router for routes starting with '/artists'

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));