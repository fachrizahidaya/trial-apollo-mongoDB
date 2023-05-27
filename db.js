const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  email: String,
});

const Article = mongoose.model("Article", {
  title: String,
  description: String,
});

mongoose
  .connect("mongodb://localhost:27017/apollo-mongoDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Terhubung ke MongoDB"))
  .catch((error) => console.error("Gagal terhubung ke MongoDB:", error));

module.exports = { User, Article };
