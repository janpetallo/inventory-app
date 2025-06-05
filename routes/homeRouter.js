const {Router} = require('express');
const homeRouter = Router();

const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.getVinylsList); // Route to get the list of vinyls

// new vinyl form
homeRouter.get('/vinyls/new', (req, res) => {
    res.send('New Vinyl Form');
});

homeRouter.post('/vinyls/new', (req, res) => {
    // Logic to handle new vinyl submission
    console.log('New vinyl submitted:', req.body);
    res.redirect('/');
});

module.exports = homeRouter;