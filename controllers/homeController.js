const db = require('../db/queries');

async function getVinylsList(req, res) {
    console.log("Fetching vinyls list...");
    const vinyls = await db.getAllVinyls();
    res.render('home', {
        title: 'Home',
        vinyls: vinyls 
    });
}

module.exports = {
    getVinylsList
};