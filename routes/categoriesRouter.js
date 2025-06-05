const {Router} = require('express');
const categoriesRouter = Router();

const categoriesController = require('../controllers/categoriesController');

categoriesRouter.get('/', categoriesController.getCategoriesList); // Route to get the list of categories
categoriesRouter.get('/:name/:id', categoriesController.getVinylsByCategory); // Route to get vinyls by category ID

// new category form
categoriesRouter.get('/new', categoriesController.addNewCategoryForm); // Route to render the new category form
categoriesRouter.post('/new', categoriesController.addNewCategory); // Route to handle new category submission

module.exports = categoriesRouter;