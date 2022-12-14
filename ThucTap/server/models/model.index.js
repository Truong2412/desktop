const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.product = require("./product.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);
db.order = require("./order.model")(mongoose);

module.exports = db;