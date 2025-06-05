const {Router} = require('express');
const categoriesRouter = Router();

const categoriesController = require('../controllers/categoriesController');

categoriesRouter.get('/', categoriesController.getCategoriesList); // Route to get the list of categories
categoriesRouter.get('/:name/:id', categoriesController.getVinylsByCategory); // Route to get vinyls by category ID

// new category form
categoriesRouter.get('/categories//new', (req, res) => {
    res.send('New Category Form');
});

categoriesRouter.post('/categories/new', (req, res) => {
    // Logic to handle new category submission
    console.log('New category submitted:', req.body);
    res.redirect('/');
});

module.exports = categoriesRouter;