const pool = require('./pool');

async function getAllVinyls() {
    const query = `
    SELECT 
        vinyls.id,
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

async function getVinylById(vinylId) {
    const query = `
        SELECT 
            vinyls.id,
            vinyls.title, 
            vinyls.artist_id, 
            vinyls.genre_id, 
            artists.name AS artist_name, 
            genres.name AS genre_name, 
            vinyls.release_year, 
            vinyls.stock_quantity, 
            vinyls.price, 
            vinyls.cover_image
        FROM vinyls
        JOIN artists ON vinyls.artist_id = artists.id
        JOIN genres ON vinyls.genre_id = genres.id
        WHERE vinyls.id = $1
    `;
    const { rows } = await pool.query(query, [vinylId]);
    return rows[0]; // Return the first row since id is unique
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
            vinyls.id,
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
            vinyls.id,
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

async function updateVinyl(vinylId, title, artist_id, genre_id, release_year, stock_quantity, price, cover_image) {
    const query = `
        UPDATE vinyls
        SET title = $1, artist_id = $2, genre_id = $3, release_year = $4, stock_quantity = $5, price = $6, cover_image = $7
        WHERE id = $8
    `;
    await pool.query(query, [title, artist_id, genre_id, release_year, stock_quantity, price, cover_image, vinylId]);
}

async function deleteVinyl(vinylId) {
    const query = `
        DELETE FROM vinyls
        WHERE id = $1
    `;
    await pool.query(query, [vinylId]);
}

module.exports = {
    getAllVinyls,
    getVinylById,
    getAllArtists,
    getAllCategories,
    getVinylByArtist,
    getVinylByCategory,
    addVinyl,
    addArtist,
    addCategory,
    updateVinyl,
    deleteVinyl
};