# youtuberest

## Getting started
Clone this repo
`$ git clone https://github.com/danisyncrtc/youtuberest.git`

#### Docker images
```

$ docker pull danisyncrtc/youtuberest_mongo
$ docker build -t danisyncrtc/youtuberest /backend
$ docker build -t danisyncrtc/youtuberest_nginx /nginx

#### Start Youtuberest
To start the stack with a populated database + nginx + backend :D
```
$ docker-compose up
```
