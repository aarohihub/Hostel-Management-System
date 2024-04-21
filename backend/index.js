const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDb } = require("./config/database");
const userRouter = require("./routes/user.Routes");
const UsersModel = require("./models/userModels");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// const PORT = process.env.PORT || 3000;
const PORT = 3005;

//Initialized database configuration
connectDb();

app.use(express.json());

//Import the User Router
app.use("/api/v1/user", userRouter);

//Root Entry
app.get("/", (req, res) => {
  res.send("Welcome to it is working now");
});

app.get("/dashboard", (req, res) => {});
app.get("/get", (req, res) => {
  UsersModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

//delete student data from mongodb
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  UsersModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => {
      res.json(err);
    });
});

//Listened to the PORT
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
