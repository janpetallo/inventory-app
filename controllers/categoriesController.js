
// import db here

async function getCategoriesList(req, res) {
    console.log("Fetching categories list...");
    // Here you would typically fetch the categories from the database
    res.render('categories', {
        title: 'Categories',
        categories: [] // This should be replaced with actual categories data from the database
    });
}


module.exports = {
    getCategoriesList
};