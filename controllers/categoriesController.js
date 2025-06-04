const db = require('../db/queries');

async function getCategoriesList(req, res) {
    console.log("Fetching categories list...");
    const categories = await db.getAllCategories();
    res.render('categories', {
        title: 'Categories',
        categories: categories 
    });
}

module.exports = {
    getCategoriesList
};