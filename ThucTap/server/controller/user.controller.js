const db = require("../models/model.index");
const User = db.user;



exports.createUser = (req, res) => {
  User.findOne({username: req.body.username},{'username': 1})
  .then(data=> {
    if(data == null){
          const user = new User({
          username: req.body.username,
          password: req.body.password,
        });
        user
          .save(user)
          .then(() => {
            res.send("ok");
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating."
            });
          });
        }
    else{
      res.send("exist")
    }
  })

  };

exports.UserSignIn = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ username: username, password: password })
    .then(data => {
        if(data === []){
            res.send("notmatch")
        }else{
            res.send(data._id);
        }

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error."
      });
    });
};
exports.fetchCart = (req, res) => {
    const id = req.params.id;
    const data = req.body.data;
    User.updateOne({_id: id},{$set: {cart: data }})
    .then( () => {
     
      res.send({ message:"fetch cart success" });

    })
    .catch(err => {
      res.status(500).send({
        message: "cannot find user id" + id
      });
    });
};
exports.getCart = (req,res) => {
  const id = req.params.id;
  User.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found user with id " + id });
    else res.send(data.cart);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving user with id=" + id });
  });
}


