const e = require("express");
const db = require("../models/model.index");
const Order = db.order;


exports.createOrder = (req, res) => {
    const data = req.body.data;
    const products = data.item;
    const buyerInfo = data.buyerInfo;
    const order = new Order({
        products: products,
        totalprice: data.totalBill,
        buyerInfo: buyerInfo,
        status: [{
          status: "create",
          text: "Đơn hàng đã được tạo",
          time: data.date
        }],
        userId: data.userId
      });
    
      // Save Tutorial in the database
      order
        .save(order)
        .then(data => {
          res.send(data._id);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Order."
          });
        });
};
exports.getOrderByUserId = (req, res) => {
  const id = req.params.id;
  Order.find({ userId: id })
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
exports.getOrderByOrderId = (req, res) => {
  const id = req.params.id;
  Order.findById(id)
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
