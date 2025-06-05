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

async function addNewArtistForm(req, res) {
    console.log("Rendering new artist form...");
    res.render('newArtist', {
        title: 'Add New Artist'
    });
}

async function addNewArtist(req, res) {
    const { name, formed_year, origin } = req.body;
    console.log(`Adding new artist: ${name}, Formed Year: ${formed_year}, Origin: ${origin}`);
    await db.addArtist(name, formed_year, origin);
    res.redirect('/artists');
}

module.exports = {
    getArtistsList,
    getVinylsByArtist,
    addNewArtistForm,
    addNewArtist
};