require("dotenv").config(); // Load environment variables from .env file
const { Client } = require("pg"); // Import the pg module to interact with PostgreSQL

const SQL = `
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

async function populateDatabase() {
    console.log("Populating database...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect(); // Connect to the PostgreSQL database
    await client.query(SQL); // Execute the SQL commands to create tables
    await client.end(); // Close the database connection
    console.log("Database populated successfully.");
}

populateDatabase(); 

