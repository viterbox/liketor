# liketor
a simple test

# Dependencies

MongoDb 3.*


# Steps

npm install

npm run start

# Sample CURLs

POST movieLike: 

curl -X POST --header "Content-Type: application/json" -d '{"user_id":1,"like":true}' "http://localhost:3000/movies/1/likes" -verbose

GET allmovieLikes

curl "http://localhost:3000/movies/1/likes" -verbose


GET nowPlaying

curl "http://localhost:3000/movies/nowplaying" -verbose




