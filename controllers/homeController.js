
const db = require('../db/queries');

async function getVinylsList(req, res) {
    console.log("Fetching vinyls list...");
    // Here you would typically query the database to get the list of vinyls.
    const vinyls = await db.getAllVinyls();
    res.render('home', {
        title: 'Home',
        vinyls: vinyls // This should be replaced with actual categories data from the database
    });
}


module.exports = {
    getVinylsList
};