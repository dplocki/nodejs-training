const express = require('express')
const _ = require('lodash')
const onlyLoggedUsers = require('../utils').onlyLoggedUsers

const Video = require('../models/video')

router = express.Router()

router.get('/', function(req, res) {
  Video.find(function(error, videos) {
    if (error) {
      res.send(error)
    }

    res.json(videos)
  })
})

router.post('/', onlyLoggedUsers, function(req, res) {
  const busboy = new Busboy({
      headers: req.headers
  });

  const ALLOWED_FIELDS = [ 'title' ];
  const video = {
      path: path.resolve(config.STORAGE_ROOT, uuid()),
      author: req.user.id
  };

  busboy.on('file', function (fieldname, file) {
      if (fieldname === 'video') {
          file.pipe(fs.createWriteStream(video.path));
      }
  });

  busboy.on('field', function (fieldname, value) {
      if (_.includes(ALLOWED_FIELDS, fieldname)) {
          video[fieldname] = value;
      }
  });

  busboy.on('finish', function () {
      fs.stat(video.path, function (err, stats) {
          if (err) {
              console.log(err);
              res.sendStatus(500);
              return;
          }

          video.size = stats.size;

          Video.forge(video).save().asCallback(function (err, data) {
              if (err) {
                  console.log(err);
                  res.sendStatus(500);
                  return;
              }

              res.sendStatus(201);
          });
      });
  });

  req.pipe(busboy);
})

router.get('/:videoId', function(req, res) {
  Video.findById(req.params.videoId, function(error, video) {
    if (error) {
      res.send(error);
    }

    res.json(video);
  })
})

router.get('/:videoId/stream', function(req, res) {
  res.json({'status': 'todo'})
})

router.get('/:videoId', function(req, res) {
  res.json({'status': 'todo'})
})

module.exports = router
