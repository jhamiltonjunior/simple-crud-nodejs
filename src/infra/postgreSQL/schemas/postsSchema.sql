CREATE TABLE posts (
  id serial PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author VARCHAR(30) UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);