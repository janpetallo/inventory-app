const db = require('../db/queries');

async function getArtistsList(req, res) {
    console.log("Fetching artists list...");
    const artists = await db.getAllArtists();
    res.render('artists', {
        title: 'Artists',
        artists: artists 
    });
}


module.exports = {
    getArtistsList
};