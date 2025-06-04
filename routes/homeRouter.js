const {Router} = require('express');
const homeRouter = Router();

const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.getVinylsList); // Route to get the list of vinyls





module.exports = homeRouter;