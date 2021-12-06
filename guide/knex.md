npx knex migrate:make migrations_name

npx knex seed:make seed_name

# roda a ultima migrate
npx knex migrate:latest

# init pg

sudo -iu postgres initdb -D /var/lib/postgres/data

pg_ctl -D /var/lib/postgres/data -l arquivolog start