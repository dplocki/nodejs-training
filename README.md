# 🏋️‍♂️ NodeJS training code

The code for NodeJS training. And Docker.

Some time ago, the company which I was working in, started this Node course for its developers. I volunteered. I have no idea what happened with the rest of code from this project (definitly there was more commits).

## Run with Docker

```sh
docker build -t nodejs_training .
docker run ­--rm -p 13000:3000 -v $(pwd):/usr/src/app/ -it nodejs_training
```

Enter address: http://localhost:13000

## Run directly

```sh
npm install
npm start
```

Enter address: http://localhost:3000

## Development run

```sh
sudo npm install nodemon -g
npm run watch
```

Enter address: http://localhost:3000

## Links

* [Hello world example](https://expressjs.com/en/starter/hello-world.html)
* [Dockerize a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
* [Building a RESTful API With Node](http://www.snnmo.com/blog/articles/node/building-a-restful-api-with-node.shtml)

## Notes

This project is so old (Node 7, NPM 4.2.0), that it didn't have `package.json`. According to advice from StackOverflow (which link to I unfortunately lost), you can generate the shrinkwrap file, then change its name.

```sh
npm shrinkwrap
mv npm-shrinkwrap.json package-lock.json
```

This wouldn't affect Dependabot report. It is not sufficient to automatic raise up the packages.

```log
updater | 2023/07/11 19:25:46 ERROR <job_692477485> undefined method `>=' for nil:NilClass
updater | 
updater |         return 8 if JSON.parse(lockfile_content)["lockfileVersion"] >= 2
updater |                                                                     ^^
```
