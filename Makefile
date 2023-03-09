setup:
	docker-compose build
	docker-compose run --rm app-api npm install
	docker-compose run --rm app-frontend npm install
start:
	docker-compose up -d
down:
	docker-compose down