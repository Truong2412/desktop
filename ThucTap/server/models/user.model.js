module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
            username: {type: String, unique: true,required: true, dropDups: true},
            password: {type: String,required: true},
            cart: []
        },
        { timestamps: true }
      )
    );
  
    return User;
  };