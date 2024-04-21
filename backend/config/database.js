const mongoose = require("mongoose");

exports.connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "studentregister",
    });
    console.log("MONGODB connection established...");
  } catch (error) {
    console.error(error.message);
  }
};
