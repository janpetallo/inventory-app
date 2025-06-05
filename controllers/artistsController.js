const db = require('../db/queries');

async function getArtistsList(req, res) {
    console.log("Fetching artists list...");
    const artists = await db.getAllArtists();
    res.render('artists', {
        title: 'Artists',
        artists: artists 
    });
}

async function getVinylsByArtist(req, res) {
    const artistId = req.params.id;
    const artistName = req.params.name;
    console.log(`Fetching vinyls for artist: ${artistName} (ID: ${artistId})...`);
    const vinyls = await db.getVinylByArtist(artistId);
    res.render('byArtist', {
        title: 'Vinyls by Artist',
        vinyls: vinyls,
        artistName: artistName
    });
}

module.exports = {
    getArtistsList,
    getVinylsByArtist
};