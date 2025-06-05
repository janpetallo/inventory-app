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

async function addVinyl(title, artist_id, genre_id, release_year, stock_quantity, price, cover_image) {
    const query = `
        INSERT INTO vinyls (title, artist_id, genre_id, release_year, stock_quantity, price, cover_image)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    await pool.query(query, [title, artist_id, genre_id, release_year, stock_quantity, price, cover_image]);
}

async function addArtist(name, formed_year, origin) {
    const query = `
        INSERT INTO artists (name, formed_year, origin)
        VALUES ($1, $2, $3)
    `;
    await pool.query(query, [name, formed_year, origin]);
}

async function addCategory(name) {
    const query = `
        INSERT INTO genres (name)
        VALUES ($1)
    `;
    await pool.query(query, [name]);
}

module.exports = {
    getAllVinyls,
    getAllArtists,
    getAllCategories,
    getVinylByArtist,
    getVinylByCategory,
    addVinyl,
    addArtist,
    addCategory
};