import User from "../model/user.model.js";
import bcrypty from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already exists" });
    }

    const hashPassword = await bcrypty.hash(password, 10);
    const createdUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await createdUser.save();
    res.status(201).json({ message: "User created Successfully", user:{
         _id: createdUser._id,
          userName: createdUser.userName,
          email: createdUser.email,
    } });
  } catch (error) {
    console.log("Error : ",  error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch =await bcrypty.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    } else {
       res.status(200).json({
        message: "Login Successfully",
        user: {
          _id: user._id,
          userName: user.userName,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("error :", error.message);
  }
};
