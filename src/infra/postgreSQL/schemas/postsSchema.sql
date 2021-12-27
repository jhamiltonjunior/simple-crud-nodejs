CREATE DATABASE nauts;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW()
)

INSERT INTO users (username, name, email, password)
VALUES ('jhsj', 'Hamilton', 'hamilton@gmail.com', '12345');

INSERT INTO users (username, name, email, password)
VALUES ('jose', 'José', 'jose@gmail.com', '123456');

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  url_params VARCHAR(60) UNIQUE NOT NULL,
  author_id VARCHAR(30) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO posts (title, body, url_params, author)
VALUES ('tITLE', 'NOT EXIST BODY', 'esse-e-meu-site', 'Hamilton');

INSERT INTO posts (title, body, url_params, author)
VALUES ('Mais um', 'NOT EXIST BODY: false', 'como-fazer-algo', 'josé');