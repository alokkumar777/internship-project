const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connect = () => {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/fiverdb")
    .then(() => {
      console.log("Database Connected");
    })
    .catch((e) => {
      console.log("Error", e);
    });
};

module.exports = connect;
