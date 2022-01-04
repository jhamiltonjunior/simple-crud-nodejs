import { Router } from 'express';

import postgresConfig from '../../config/postgres.js';

const router = Router();

const { query } = postgresConfig;

router.get('/reset', async (req, res) => {
  const results = await query(`
    DROP TABLE IF EXISTS dialogue;
    
    DROP TABLE IF EXISTS post;
    DROP TABLE IF EXISTS people;


    CREATE TABLE people(
      id_people INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      administrator BOOLEAN DEFAULT FALSE,
      moderator BOOLEAN DEFAULT FALSE,
      simple_people BOOLEAN DEFAULT TRUE,
      username VARCHAR(30) UNIQUE NOT NULL,
      fullname TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      passwd VARCHAR(20) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NULL
    );

    INSERT INTO people (username, fullname, email, passwd)
    VALUES ('jhsj', 'Hamilton', 'hamilton@gmail.com', '12345');

    INSERT INTO people (username, fullname, email, passwd)
    VALUES ('jose', 'Josés', 'jose@gmail.com', '123456');

    CREATE TABLE post(
      id_post INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      title TEXT NOT NULL,
      body TEXT NOT NULL,
      url VARCHAR(60) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NULL,
      id_author INT,
      FOREIGN KEY(id_author)
        REFERENCES people(id_people)
          ON DELETE CASCADE
            ON UPDATE CASCADE
    );

    INSERT INTO post (title, body, url, id_author)
    VALUES ('tITLE', 'NOT EXIST BODY', 'esse-e-meu-site', 1);

    INSERT INTO post (title, body, url, id_author)
    VALUES ('Mais um', 'NOT EXIST BODY: false', 'como-fazer-algo', 2);

    CREATE TABLE dialogue(
      id_dialogue INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      id_post INT,
      id_author INT,
      title VARCHAR(60) NOT NULL,
      body TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NULL,
      FOREIGN KEY(id_post)
        REFERENCES post(id_post)
          ON UPDATE CASCADE
            ON DELETE CASCADE,
      FOREIGN KEY(id_author)
        REFERENCES people(id_people)
          ON UPDATE CASCADE
    );

    INSERT INTO dialogue (id_post, id_author, title, body)
    VALUES (1, 2, 'Se hoje fosse amanhã que dia seria ontem?', 'Essa é minha dúvida');

    INSERT INTO dialogue (id_post, id_author, title, body)
    VALUES (1, 2, 'Como Hackear a NASA completo pt-BR', 'METODO INFALIVEL');

    INSERT INTO dialogue (id_post, id_author, title, body)
    VALUES (2, 1, 'Como fazer SQL Inject no MongoDB', 'Será que em 2022 isso ainda é possível?');
  `);

  res.json({ res: results.rows });
});

export default (app) => app.use(router);
