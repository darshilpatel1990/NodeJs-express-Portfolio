const express = require('express');
const skillRouter = express.Router();

skillRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the skills to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /skills');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /skills');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /skills');
});

module.exports = skillRouter;