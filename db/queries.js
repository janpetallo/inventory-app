const pool = require('./pool');

async function getAllVinyls() {
    const query = `
    SELECT 
        vinyls.title, 
        artists.name AS artist_name, 
        genres.name AS genre_name, 
        vinyls.release_year, 
        vinyls.stock_quantity, 
        vinyls.price, 
        vinyls.cover_image
    FROM vinyls
    JOIN artists ON vinyls.artist_id = artists.id
    JOIN genres ON vinyls.genre_id = genres.id
    ORDER BY vinyls.title
    `;
    const { rows } = await pool.query(query);
    return rows;
}

async function getAllArtists() {
    const query = 'SELECT * FROM artists';
    const { rows } = await pool.query(query);
    return rows;
}

async function getAllCategories() {
    const query = 'SELECT * FROM genres';
    const { rows } = await pool.query(query);
    return rows;
}

async function getVinylByArtist(artistId) {
    const query = `
        SELECT 
            vinyls.title, 
            artists.name AS artist_name, 
            genres.name AS genre_name, 
            vinyls.release_year, 
            vinyls.stock_quantity, 
            vinyls.price, 
            vinyls.cover_image
        FROM vinyls
        JOIN artists ON vinyls.artist_id = artists.id
        JOIN genres ON vinyls.genre_id = genres.id
        WHERE vinyls.artist_id = $1
    `;
    const { rows } = await pool.query(query, [artistId]);
    return rows;
}

async function getVinylByCategory(categoryId) {
    const query = `
        SELECT 
            vinyls.title, 
            artists.name AS artist_name, 
            genres.name AS genre_name, 
            vinyls.release_year, 
            vinyls.stock_quantity, 
            vinyls.price, 
            vinyls.cover_image
        FROM vinyls
        JOIN artists ON vinyls.artist_id = artists.id
        JOIN genres ON vinyls.genre_id = genres.id
        WHERE vinyls.genre_id = $1
    `;
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