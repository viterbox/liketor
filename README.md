# liketor
a simple test

# Dependencies

Redis version 3.2.8


# Steps

npm install

npm run start

# Sample CURLs

POST movieLike: 

curl -X POST --header "Content-Type: application/json" -d '{"user_id":1,"like":true}' "http://localhost:3000/movies/1/likes" -verbose

GET allmovieLikes

curl "http://localhost:3000/movies/1/likes" -verbose


