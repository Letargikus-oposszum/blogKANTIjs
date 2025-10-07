import db from "./db.js"

db.prepare(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name STRING,
    email STRING,
    password STRING 
    )`).run();