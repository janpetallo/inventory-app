const {Router} = require('express');
const artistsRouter = Router();

const artistsController = require('../controllers/artistsController');

artistsRouter.get('/', artistsController.getArtistsList); // Route to get the list of vinyls
artistsRouter.get('/:name/:id', artistsController.getVinylsByArtist); // Route to get vinyls by artist ID




module.exports = artistsRouter;