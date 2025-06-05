const {Router} = require('express');
const homeRouter = Router();

const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.getVinylsList); // Route to get the list of vinyls

// new vinyl form
homeRouter.get('/vinyls/new', homeController.addNewVinylForm); // Route to render the new vinyl form
homeRouter.post('/vinyls/new', homeController.addNewVinyl); // Route to handle new vinyl submission

// edit vinyl form
homeRouter.get('/vinyls/:title/:id/edit', homeController.editVinylForm); // Route to render the edit vinyl form
homeRouter.post('/vinyls/:title/:id/edit', homeController.editVinyl); // Route to handle vinyl edit submission

// Route to handle vinyl deletion
homeRouter.post('/vinyls/:title/:id/delete', homeController.deleteVinyl); // Route to handle vinyl deletion

module.exports = homeRouter;