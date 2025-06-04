const {Router} = require('express');
const artistsRouter = Router();

const artistsController = require('../controllers/artistsController');

artistsRouter.get('/', artistsController.getArtistsList); // Route to get the list of vinyls





module.exports = artistsRouter;