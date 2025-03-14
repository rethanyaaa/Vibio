import httpStatus from "http-status";
import { User } from "../models/user.model";
import bcrypt, { hash } from "bcrypt";

const register = async (req, res) => {
  const { name, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .httpStatus(httpStatus.FOUND).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      username: username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(httpStatus.CREATED).json({ message: "User registered" });
  } catch(e) {
    res.json({message: `Something went wrong ${e}`});
  }
};
