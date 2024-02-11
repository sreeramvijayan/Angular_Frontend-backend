
module.exports = app => {
    var network = require('../controllers/network.controller.js');

    var router = require('express').Router();

    router.post("/", network.create);

    router.get("/", network.findAll);

    router.put('/:id', network.update)

    router.delete('/:id', network.delete)

    app.use("/api/network", router);

}