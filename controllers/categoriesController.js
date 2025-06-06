const db = require('../db/queries');

async function getCategoriesList(req, res) {
    console.log("Fetching genres list...");
    const categories = await db.getAllCategories();
    res.render('categories', {
        title: 'Genres',
        categories: categories 
    });
}

async function getVinylsByCategory(req, res) {
    const categoryId = req.params.id;
    const categoryName = req.params.name;
    console.log(`Fetching vinyls for genre: ${categoryName} (ID: ${categoryId})...`);
    const vinyls = await db.getVinylByCategory(categoryId);
    res.render('byCategory', {
        title: 'Vinyls by Genre',
        vinyls: vinyls,
        categoryName: categoryName
    });
}

async function addNewCategoryForm(req, res) {
    console.log("Rendering new genre form...");
    res.render('newCategory', {
        title: 'Add New Genre'
    });
}

async function addNewCategory(req, res) {
    const { name } = req.body;
    console.log(`Adding new genre: ${name}`);
    await db.addCategory(name);
    res.redirect('/categories');
}

module.exports = {
    getCategoriesList,
    getVinylsByCategory,
    addNewCategoryForm,
    addNewCategory
};