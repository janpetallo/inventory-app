# Vinyl Inventory Application

A full-stack web application for managing a vinyl record collection, built with Node.js, Express, PostgreSQL, and EJS. This project was created as part of [The Odin Project's Node.js curriculum](https://www.theodinproject.com/lessons/node-path-nodejs-inventory-application) to practice server-side development and database operations.

## Project Overview

This inventory management system allows users to:
- View all vinyl records in the collection
- Browse records by genre/category
- Browse records by artist
- Add new vinyl records, artists, and genres
- Edit existing vinyl records
- Delete records with proper data validation

The application demonstrates key backend concepts including MVC architecture, database design with PostgreSQL, CRUD operations, and template rendering with EJS.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Templating**: EJS (Embedded JavaScript)
- **Environment**: dotenv for configuration

## AI Assistance with Styling

The primary focus of this project was on backend development, including Node.js, Express, and PostgreSQL. To expedite the frontend styling process and maintain this focus, AI assistance was utilized for generating the CSS in `public/style.css`.

## Project Structure

```
inventory-app/
├── app.js                 # Main application entry point
├── package.json           # Dependencies and scripts
├── controllers/           # Route logic and business operations
├── routes/                # Express route definitions
├── db/                    # Database configuration and setup
├── views/                 # EJS templates for frontend
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [PostgreSQL](https://www.postgresql.org/download/) (v12 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/janpetallo/inventory-app.git
   cd inventory-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up PostgreSQL database**
   
   Create a new PostgreSQL database:
   ```bash
   createdb vinyl_inventory
   ```
   
   Or using psql:
   ```sql
   psql -U postgres
   CREATE DATABASE vinyl_inventory;
   \q
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_DATABASE=vinyl_inventory
   DB_URL=postgresql://your_username:your_password@localhost:5432/vinyl_inventory
   ```
   Replace `your_username` and `your_password` with your PostgreSQL credentials.

5. **Initialize the database**
   
   Run the database setup script to create tables and populate with sample data:
   ```bash
   npm run db
   ```

6. **Start the application**
   ```bash
   npm run dev
   ```

7. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server with auto-restart
- `npm run db` - Initialize/reset database with sample data

## Database Schema

The application uses three main tables with the following relationships:

**Genres Table**: id, name  
**Artists Table**: id, name, formed_year, origin  
**Vinyls Table**: id, title, artist_id, genre_id, release_year, stock_quantity, price, cover_image

## Key Features

### Backend Functionality
- Express.js server with modular routing
- PostgreSQL integration with connection pooling
- RESTful API design following MVC patterns

### Database Operations
- Complex queries with JOIN operations
- Prepared statements for SQL injection prevention
- Foreign key constraints maintaining referential integrity

### Server-side Rendering
- Dynamic HTML generation with EJS templating
- Reusable components for consistent UI

## Learning Objectives

This project helped practice:
- Node.js server development
- Express.js framework usage
- PostgreSQL database design and operations
- MVC architecture implementation
- Template rendering with EJS
- RESTful API design principles