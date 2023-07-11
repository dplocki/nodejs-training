# 🏋️‍♂️ NodeJS training code

The code for NodeJS training. And Docker.

## Run with Docker

```
docker build -­t nodejs_training .
docker run ­--rm -p 13000:3000 -v $(pwd):/usr/src/app/ -it nodejs_training
```

Enter address: http://localhost:13000

## Run directly

```
npm install
npm start
```

Enter address: http://localhost:3000

## Development run

```
sudo npm install nodemon -g
npm run watch
```

Enter address: http://localhost:3000

## Links

* [Hello world example](https://expressjs.com/en/starter/hello-world.html)
* [Dockerize a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
* [Building a RESTful API With Node](http://www.snnmo.com/blog/articles/node/building-a-restful-api-with-node.shtml)
