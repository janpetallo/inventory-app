const {Router} = require('express');
const artistsRouter = Router();

const artistsController = require('../controllers/artistsController');

artistsRouter.get('/', artistsController.getArtistsList); // Route to get the list of vinyls
artistsRouter.get('/:name/:id', artistsController.getVinylsByArtist); // Route to get vinyls by artist ID

// new artist form
artistsRouter.get('/new', (req, res) => {
    res.send('New artist Form');
});

artistsRouter.post('/new', (req, res) => {
    // Logic to handle new artist submission
    console.log('New artist submitted:', req.body);
    res.redirect('/');
});


module.exports = artistsRouter;