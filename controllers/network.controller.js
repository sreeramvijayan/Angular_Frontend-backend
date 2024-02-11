const Network = require("../models/network.model"); // Import the Network constructor function from the model file

// const Network = db; 
// console.log(db)

// Create and Save a new Tutorial
exports.create = (req, res) => {
  //   validate
  if (!req.body.name) {
    res.status(400).send({ message: "content cannot be empty" })
  }

  // create
  const network = new Network({
    name: req.body.name,
    description: req.body.description,
    version: req.body.version,
    brand: req.body.brand
  });
  // save

  network.save(network).then(data => {
    console.log('success')
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "some error occured"
    })
  })

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Network.find().then(data => {

    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "some error occured"
    })
  })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content cannot be empty" })
  }
  const id = req.params.id;
  console.log(id);
  Network.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(400).send({ message: `cannot update item with id=${id}` });
      } else res.send({ message: "updated successfully" });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "some error occured"
      })
    })
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Network.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(400).send({ message: `cannot update item with id=${id}` });
      } else res.send({ message: "deleted successfully" });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "some error occured"
      })
    })
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};