const db = require('../db/queries');

async function getCategoriesList(req, res) {
    console.log("Fetching categories list...");
    const categories = await db.getAllCategories();
    res.render('categories', {
        title: 'Categories',
        categories: categories // This should be replaced with actual categories data from the database
    });
}

module.exports = {
    getCategoriesList
};