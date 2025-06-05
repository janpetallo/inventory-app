require("dotenv").config(); // Load environment variables from .env file
const { Client } = require("pg"); // Import the pg module to interact with PostgreSQL

const SQL = `
DROP TABLE IF EXISTS vinyls CASCADE;
DROP TABLE IF EXISTS artists CASCADE;
DROP TABLE IF EXISTS genres CASCADE;

CREATE TABLE IF NOT EXISTS genres (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS artists (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    formed_year INTEGER,
    origin VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS vinyls (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(100) NOT NULL,
    artist_id INTEGER REFERENCES artists(id),
    genre_id INTEGER REFERENCES genres(id),
    release_year INTEGER,
    stock_quantity INTEGER DEFAULT 0,
    price NUMERIC(10, 2) NOT NULL,
    cover_image VARCHAR(255)
);

`;

// Sample data
const genres = [
  { name: "Rock" },
  { name: "Jazz" },
  { name: "Classical" },
  { name: "Electronic" },
  { name: "Hip Hop" },
];

const artists = [
  { name: "The Beatles", formed_year: 1960, origin: "Liverpool, England" },
  { name: "Miles Davis", formed_year: null, origin: "Alton, Illinois, USA" },
  {
    name: "Johann Sebastian Bach",
    formed_year: null,
    origin: "Eisenach, Germany",
  },
  { name: "Kraftwerk", formed_year: 1970, origin: "Düsseldorf, Germany" },
  {
    name: "A Tribe Called Quest",
    formed_year: 1985,
    origin: "Queens, New York, USA",
  },
];

const vinyls = [
  {
    title: "Abbey Road",
    artist_name: "The Beatles",
    genre_name: "Rock",
    release_year: 1969,
    stock_quantity: 100,
    price: 25.99,
    cover_image:
      "https://cdn.shoplightspeed.com/shops/634895/files/63380673/1600x2048x2/beatles-abbey-road-50th-anniversary.jpg",
  },
  {
    title: "Kind of Blue",
    artist_name: "Miles Davis",
    genre_name: "Jazz",
    release_year: 1959,
    stock_quantity: 50,
    price: 22.5,
    cover_image: "https://m.media-amazon.com/images/I/71W8b8QzfiL._AC_SL1400_.jpg",
  },
  {
    title: "Brandenburg Concertos",
    artist_name: "Johann Sebastian Bach",
    genre_name: "Classical",
    release_year: 1721,
    stock_quantity: 30,
    price: 19.75,
    cover_image: "https://m.media-amazon.com/images/I/81YYHs-p7GL._AC_SL1500_.jpg",
  },
  {
    title: "Trans-Europe Express",
    artist_name: "Kraftwerk",
    genre_name: "Electronic",
    release_year: 1977,
    stock_quantity: 75,
    price: 20.0,
    cover_image: "https://m.media-amazon.com/images/I/61rTHRxqFXL._AC_SL1055_.jpg",
  },
  {
    title: "The Low End Theory",
    artist_name: "A Tribe Called Quest",
    genre_name: "Hip Hop",
    release_year: 1991,
    stock_quantity: 60,
    price: 24.0,
    cover_image: "https://m.media-amazon.com/images/I/61x4y2U+8aL._AC_SL1500_.jpg",
  },
];

async function populateDatabase() {
  console.log("Populating database...");
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect(); // Connect to the PostgreSQL database
  await client.query(SQL); // Execute the SQL commands to create tables

  // Populate genres
  for (const genre of genres) {
    await client.query("INSERT INTO genres (name) VALUES ($1)", [genre.name]);
  }
  console.log("Genres populated.");

  // Populate artists
  for (const artist of artists) {
    await client.query(
      "INSERT INTO artists (name, formed_year, origin) VALUES ($1, $2, $3)",
      [artist.name, artist.formed_year, artist.origin]
    );
  }
  console.log("Artists populated.");

  // Populate vinyls
  for (const vinyl of vinyls) {
    // Get artist_id
    const artistResult = await client.query(
      "SELECT id FROM artists WHERE name = $1",
      [vinyl.artist_name]
    );
    const artistId = artistResult.rows[0]?.id;

    // Get genre_id
    const genreResult = await client.query(
      "SELECT id FROM genres WHERE name = $1",
      [vinyl.genre_name]
    );
    const genreId = genreResult.rows[0]?.id;

    if (artistId && genreId) {
      await client.query(
        "INSERT INTO vinyls (title, artist_id, genre_id, release_year, stock_quantity, price, cover_image) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [
          vinyl.title,
          artistId,
          genreId,
          vinyl.release_year,
          vinyl.stock_quantity,
          vinyl.price,
          vinyl.cover_image,
        ]
      );
    } else {
      console.warn(`Could not find artist or genre for vinyl: ${vinyl.title}`);
    }
  }
  console.log("Vinyls populated.");

  await client.end(); // Close the database connection
  console.log("Database populated successfully.");
}

populateDatabase();
