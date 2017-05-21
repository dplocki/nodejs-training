# NodeJS training code

The code for NodeJS training. And Docker.

# Run with Docker

```
docker build -­t nodejs_training .
docker run ­-p 13000:3000 -­d nodejs_training
```

Enter adress: http://localhost:13000

# Run directly

```
npm install
npm start
```
Enter adress: http://localhost:3000

# Development run

```
sudo npm install nodemon -g
npm watch
```

Enter adress: http://localhost:3000

# Links

 * [Hello world example](https://expressjs.com/en/starter/hello-world.html)
 * [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
 * [Building a RESTful API With Node](http://www.snnmo.com/blog/articles/node/building-a-restful-api-with-node.shtml)
