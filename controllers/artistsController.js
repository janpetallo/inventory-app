
// import db here

async function getArtistsList(req, res) {
    console.log("Fetching artists list...");
    // Here you would typically query the database to get the list of artists.
    res.render('artists', {
        title: 'Artists',
        artists: [] // This should be replaced with actual categories data from the database
    });
}


module.exports = {
    getArtistsList
};