const express = require('express');
const funfactRouter = express.Router();

funfactRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the funfacts to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /funfacts');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /funfacts');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /funfacts');
});

module.exports = funfactRouter;