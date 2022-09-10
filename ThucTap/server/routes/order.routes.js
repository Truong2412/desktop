module.exports = app => {
    const orders = require("../controller/order.controller");
  
    var router = require("express").Router();
 
    // them moi' user
    router.post("/order", orders.createOrder);
    //get order by user Id
    router.get("/order/:id", orders.getOrderByUserId);
    //get order by order Id
    router.get("/order/find/:id", orders.getOrderByOrderId);

    app.use('/api', router);
  };