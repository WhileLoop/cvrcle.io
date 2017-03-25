all: install migrate run

install:
	npm install -g webpack webpack-dev-server knex
	npm install

migrate:
	knex migrate:latest
	knex seed:run

run:
	npm start
