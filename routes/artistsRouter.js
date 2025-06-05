const {Router} = require('express');
const artistsRouter = Router();

const artistsController = require('../controllers/artistsController');

artistsRouter.get('/', artistsController.getArtistsList); // Route to get the list of vinyls
artistsRouter.get('/:name/:id', artistsController.getVinylsByArtist); // Route to get vinyls by artist ID

// new artist form
artistsRouter.get('/new', artistsController.addNewArtistForm); // Route to render the new artist form
artistsRouter.post('/new', artistsController.addNewArtist); // Route to handle new artist submission


module.exports = artistsRouter;