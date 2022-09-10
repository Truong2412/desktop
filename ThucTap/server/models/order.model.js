module.exports = mongoose => {
    const Order = mongoose.model(
      "order",
      mongoose.Schema(
        {
            products: [],
            totalprice: String,
            buyerInfo: {},
            status: [],
            userId: String
        },
        { timestamps: true }
      )
    );
  
    return Order;
  };