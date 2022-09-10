module.exports = app => {
    const users = require("../controller/user.controller");
  
    var router = require("express").Router();
 
    // them moi' user
    router.post("/user/signup", users.createUser);
    // dang nhap
    router.post("/user/signin", users.UserSignIn);
    //sync cart
    router.post("/user/cart/:id", users.fetchCart);
    //get cart when sign in
    router.get("/user/cart/:id", users.getCart);

  
    app.use('/api', router);
  };