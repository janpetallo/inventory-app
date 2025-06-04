
// import db here

async function getVinylsList(req, res) {
    console.log("Fetching vinyls list...");
    // Here you would typically query the database to get the list of vinyls.
    res.render('home', {
        title: 'Home',
        vinyls: [] // This should be replaced with actual categories data from the database
    });
}


module.exports = {
    getVinylsList
};