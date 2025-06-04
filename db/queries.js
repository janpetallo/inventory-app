const pool = require('./pool');

async function getAllVinyls() {
    const query = 'SELECT * FROM vinyls';
    const { rows } = await pool.query(query);
    return rows;
}

async function getAllArtists() {
    const query = 'SELECT * FROM artists';
    const { rows } = await pool.query(query);
    return rows;
}

async function getAllCategories() {
    const query = 'SELECT * FROM categories';
    const { rows } = await pool.query(query);
    return rows;
}

async function getVinylByArtist(artistId) {
    const query = 'SELECT * FROM vinyls WHERE artist_id = $1';
    const { rows } = await pool.query(query, [artistId]);
    return rows;
}

async function getVinylByCategory(categoryId) {
    const query = 'SELECT * FROM vinyls WHERE genre_id = $1';
    const { rows } = await pool.query(query, [categoryId]);
    return rows;
}

module.exports = {
    getAllVinyls,
    getAllArtists,
    getAllCategories,
    getVinylByArtist,
    getVinylByCategory
};