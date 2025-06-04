const {Router} = require('express');
const categoriesRouter = Router();

const categoriesController = require('../controllers/categoriesController');

categoriesRouter.get('/', categoriesController.getCategoriesList); // Route to get the list of categories



module.exports = categoriesRouter;