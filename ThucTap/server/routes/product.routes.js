module.exports = app => {
    const products = require("../controller/product.controller");
  
    var router = require("express").Router();
 
    //lay du lieu cho HotSale
    router.get("/sale", products.findSale);
  
    //lay du lieu cho HomeCategory
    router.get("/home/:brand", products.findHomeCategory);

  //lay du lieu theo brand
    router.get("/dispath/:brand", products.filterBrand);
  
    //lay du lieu theo brand + subMenun
    router.get("/dispath/:brand/:series", products.filterSubMenu);
 
    //lay du lieu chi tiet cho san pham theo id
    router.get("/dispath/:brand/:name/:id", products.detailProductById);
    
    // lay du lieu san pham lien quan
    router.get("/same/:brand/:id", products.sameProduct);
    //lay du lieu cho searchBox
    router.get("/search", products.searchProduct);

    //getAll for admin dashboard
    router.get("/admin/product", products.getAll);
  
    app.use('/api', router);
  };