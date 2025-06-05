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
    const artists = await db.getAllArtists();
    const genres = await db.getAllCategories();
    res.render('newVinyl', {
        title: 'Add New Vinyl',
        artists: artists,
        genres: genres
    });
}

async function addNewVinyl(req, res) {
    const { title, artist_id, genre_id, release_year, stock_quantity, price, cover_image } = req.body;
    console.log(`Adding new vinyl: ${title}, Artist ID: ${artist_id}, Genre ID: ${genre_id}, Release Year: ${release_year}, Stock Quantity: ${stock_quantity}, Price: ${price}, Cover Image: ${cover_image}`);
    await db.addVinyl(title, artist_id, genre_id, release_year, stock_quantity, price, cover_image);
    res.redirect('/');
}

async function editVinylForm(req, res) {
    const vinylId = req.params.id;
    const vinyl = await db.getVinylById(vinylId);
    const artists = await db.getAllArtists();
    const genres = await db.getAllCategories();

    res.render('editVinyl', {
        title: 'Edit Vinyl',
        vinyl: vinyl,
        artists: artists,
        genres: genres
    });
}

async function editVinyl(req, res) {
    const vinylId = req.params.id;
    const { title, artist_id, genre_id, release_year, stock_quantity, price, cover_image } = req.body;
    console.log(`Editing vinyl ID: ${vinylId}, Title: ${title}, Artist ID: ${artist_id}, Genre ID: ${genre_id}, Release Year: ${release_year}, Stock Quantity: ${stock_quantity}, Price: ${price}, Cover Image: ${cover_image}`);
    await db.updateVinyl(vinylId, title, artist_id, genre_id, release_year, stock_quantity, price, cover_image);
    res.redirect('/');
}

async function deleteVinyl(req, res) {
    const vinylId = req.params.id;
    console.log(`Deleting vinyl ID: ${vinylId}`);
    await db.deleteVinyl(vinylId);
    res.redirect('/');
}

module.exports = {
    getVinylsList,
    addNewVinylForm,
    addNewVinyl,
    editVinylForm,
    editVinyl,
    deleteVinyl
};