module.exports = mongoose => {
    const Product = mongoose.model(
      "product",
      mongoose.Schema(
        {
            brand: String,
            classify: String,
            series: String,
            image: String,
            status: String,
            note:String,
            name: String,
            price: Number,
            sale: Boolean,
            oldPrice: Number,
            option: [{
                color: String,
                stock: Boolean,
                image: String,
                optionprice: Number
            }],
            rom: [
                {
                    stock: Boolean,
                    romtype: String,
                    romprice: Number
                }
            ],
            config: [
                {
                    part: String,
                    spec: String
                }
            ],
            review: [
                {
                    title: String,
                    content: String
                }
            ]
        },
        { timestamps: true }
      )
    );
  
    return Product;
  };