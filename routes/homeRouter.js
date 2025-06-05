const {Router} = require('express');
const homeRouter = Router();

const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.getVinylsList); // Route to get the list of vinyls

// new vinyl form
homeRouter.get('/vinyls/new', homeController.addNewVinylForm); // Route to render the new vinyl form
homeRouter.post('/vinyls/new', homeController.addNewVinyl); // Route to handle new vinyl submission

module.exports = homeRouter;