import { Router } from 'express';

import postgresConfig from '../../config/postgres.js';

const router = Router();

const { query } = postgresConfig;

router.get('/reset', async (req, res) => {
  const results = await query(`
    DROP TABLE IF EXISTS comment_schema;
    DROP TABLE IF EXISTS user_schema;
    DROP TABLE IF EXISTS post_schema;

    DROP TABLE IF EXISTS user_schema;

    CREATE TABLE user_schema(
      user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      username VARCHAR(30) UNIQUE NOT NULL,
      fullname TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      passwd VARCHAR(20) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW()
    );

    INSERT INTO user_schema (username, fullname, email, passwd)
    VALUES ('jhsj', 'Hamilton', 'hamilton@gmail.com', '12345');

    INSERT INTO user_schema (username, fullname, email, passwd)
    VALUES ('jose', 'Josés', 'jose@gmail.com', '123456');

    DROP TABLE IF EXISTS post_schema;

    CREATE TABLE post_schema(
      post_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      title TEXT NOT NULL,
      body TEXT NOT NULL,
      url VARCHAR(60) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW(),
      user_id INT,
      FOREIGN KEY(user_id)
        REFERENCES user_schema(user_id)
          ON DELETE CASCADE
            ON UPDATE CASCADE
    );

    INSERT INTO post_schema (title, body, url, user_id)
    VALUES ('tITLE', 'NOT EXIST BODY', 'esse-e-meu-site', 1);

    INSERT INTO post_schema (title, body, url, user_id)
    VALUES ('Mais um', 'NOT EXIST BODY: false', 'como-fazer-algo', 2);

    DROP TABLE IF EXISTS comment_schema;

    CREATE TABLE comment_schema(
      comment_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      post_id INT,
      user_id INT,
      title VARCHAR(60) NOT NULL,
      body TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NULL,
      FOREIGN KEY(post_id)
        REFERENCES post_schema(post_id)
          ON UPDATE CASCADE
            ON DELETE CASCADE,
      FOREIGN KEY(user_id)
        REFERENCES user_schema(user_id)
          ON UPDATE CASCADE
    );

    INSERT INTO comment_schema (post_id, user_id, title, body)
    VALUES (1, 2, 'Se hoje fosse amanhã que dia seria ontem?', 'Essa é minha dúvida');

    INSERT INTO comment_schema (post_id, user_id, title, body)
    VALUES (1, 2, 'Como Hackear a NASA completo pt-BR', 'METODO INFALIVEL');

    INSERT INTO comment_schema (post_id, user_id, title, body)
    VALUES (2, 1, 'Como fazer SQL Inject no MongoDB', 'Será que em 2022 isso ainda é possível?');

  `);

  res.json({ res: results.rows });
});

export default (app) => app.use(router);
