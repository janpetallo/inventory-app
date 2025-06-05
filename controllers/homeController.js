const db = require('../db/queries');

async function getVinylsList(req, res) {
    console.log("Fetching vinyls list...");
    const vinyls = await db.getAllVinyls();
    res.render('home', {
        title: 'Home',
        vinyls: vinyls 
    });
}

async function addNewVinylForm(req, res) {
    console.log("Rendering new vinyl form...");
    res.render('newVinyl', {
        title: 'Add New Vinyl'
    });
}

async function addNewVinyl(req, res) {
    const { title, artist_id, genre_id, release_year, stock_quantity, price, cover_image } = req.body;
    console.log(`Adding new vinyl: ${title}, Artist ID: ${artist_id}, Genre ID: ${genre_id}, Release Year: ${release_year}, Stock Quantity: ${stock_quantity}, Price: ${price}, Cover Image: ${cover_image}`);
    await db.addVinyl(title, artist_id, genre_id, release_year, stock_quantity, price, cover_image);
    res.redirect('/');
}

module.exports = {
    getVinylsList,
    addNewVinylForm,
    addNewVinyl
};