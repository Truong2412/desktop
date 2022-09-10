const db = require("../models/model.index");
const Product = db.product;

exports.searchProduct = (req, res) => {
  Product.find({},{'name':1,'_id':1,'brand': 1})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ."
      });
    });
};

exports.findSale = (req, res) => {
    Product.find({ sale: true },{'name':1,'image':1,'brand':1,'note':1,'status': 1,'price':1,'oldprice':1})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error ."
        });
      });
  };

exports.findHomeCategory = (req, res) => {
    const brand = req.params.brand;
    Product.find({brand: brand},{'name':1,'image':1,'brand':1,'note':1,'status': 1,'price':1,'oldprice':1}).limit(10)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error ."
        });
      });
  };
  exports.filterBrand = (req, res) => {
    const brand = req.params.brand;
    Product.find({brand: brand},{'name':1,'image':1,'brand':1,'note':1,'status': 1,'price':1,'oldprice':1})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error ."
        });
      });
  };
  exports.filterSubMenu = (req, res) => {
    const series = req.params.series;
    const brand = req.params.brand;
    Product.find({brand: brand, series: series},{'name':1,'image':1,'brand':1,'note':1,'status': 1,'price':1,'oldprice':1})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error ."
        });
      });
  };

exports.detailProductById = (req, res) => {
  const id = req.params.id;
  Product.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found  with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving  with id=" + id });
    });
};
exports.sameProduct = (req, res) => {
  const brand = req.params.brand;
  const id = req.params.id;
    Product.find({ _id: {$ne: id}, brand: brand },{'name':1,'image':1,'brand':1,'note':1,'status': 1,'price':1,'oldprice':1}).limit(3)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error ."
        });
      });
};

//getAll product
exports.getAll = (req, res) => {
  Product.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ."
      });
    });
};
