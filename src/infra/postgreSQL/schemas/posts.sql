create schema blog;

create table blog.post (
  id serial primary key,
  title text not null,
  content text not null,
  date timestamp default now()
);

CREATE TABLE posts (
id serial PRIMARY KEY,
title VARCHAR(30) NOT NULL,
content TEXT NOT NULL,
created_on TIMESTAMP NOT NULL,
updated_on TIMESTAMP
);
