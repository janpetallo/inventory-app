const {Router} = require('express');
const categoriesRouter = Router();

const categoriesController = require('../controllers/categoriesController');

categoriesRouter.get('/', categoriesController.getCategoriesList); // Route to get the list of categories
categoriesRouter.get('/:name/:id', categoriesController.getVinylsByCategory); // Route to get vinyls by category ID


module.exports = categoriesRouter;