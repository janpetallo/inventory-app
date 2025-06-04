
// import db here

async function getCategoriesList(req, res) {
    console.log("Fetching categories list...");
    res.render('categories', {
        title: 'Categories',
        categories: [] // This should be replaced with actual categories data from the database
    });
}


module.exports = {
    getCategoriesList
};