const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

exports.signUp = async (req, res) => {
  try {
    console.log("Request Data: ", req.body);
    const { username, email, password, collegename, phone, address } = req.body;

    //check if the input fields are empty
    if (
      !username ||
      !email ||
      !password ||
      !collegename ||
      !phone ||
      !address
    ) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    //check if the user already exsts in database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    //Hash the user's password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    //Save the user to the database
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      collegename,
      phone,
      address,
    });
    await newUser.save();

    return res
      .status(201)
      .json({ message: "User Created Successfully", newUser });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error creating user" });
  }
};

//FOR LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please Input Username and Password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Compare the incoming plaintext password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY || "1234%)",
      { expiresIn: "1h" }
    );

    let role = user.role || "user";

    if (role === "admin") {
      return res
        .status(200)
        .json({ message: "Login Successful", data: user, token, role });
    }

    return res
      .status(200)
      .json({ message: "Login Successful", data: user, token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error during login" });
  }
};

//Protected Route by Jwt
exports.getAllUsers = async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find({}, { password: 0 }); // Exclude the password field from the response

    return res.status(200).json({ users });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error fetching users" });
  }
};
