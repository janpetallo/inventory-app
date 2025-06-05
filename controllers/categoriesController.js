const db = require('../db/queries');

async function getCategoriesList(req, res) {
    console.log("Fetching categories list...");
    const categories = await db.getAllCategories();
    res.render('categories', {
        title: 'Categories',
        categories: categories 
    });
}

async function getVinylsByCategory(req, res) {
    const categoryId = req.params.id;
    const categoryName = req.params.name;
    console.log(`Fetching vinyls for category: ${categoryName} (ID: ${categoryId})...`);
    const vinyls = await db.getVinylByCategory(categoryId);
    res.render('byCategory', {
        title: 'Vinyls by Category',
        vinyls: vinyls,
        categoryName: categoryName
    });
}

module.exports = {
    getCategoriesList,
    getVinylsByCategory
};