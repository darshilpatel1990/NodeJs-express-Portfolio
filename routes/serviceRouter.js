const express = require('express');
const serviceRouter = express.Router();

serviceRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the services to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /services');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /services');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /services');
});

module.exports = serviceRouter;