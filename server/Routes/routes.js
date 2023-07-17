const { Router } = require("express");
const User = require("../Model/User");
const userRoute = Router();
////----USER----////

userRoute.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(403).json({ message: error });
  }
});

userRoute.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const posts = await User.findById(id);
    res.json(posts);
  } catch (error) {
    res.status(403).json({ message: error });
  }
});

// Create
userRoute.post("/", async (req, res) => {
  try {
   
    const user = new User({
      Email: req.body.Email,
      Password: req.body.Password,
    });
    const addedUser = await user.save();
    // return res.json(addedUser);
    const userId = addedUser._id;
    return res.send(userId);
  } catch (error) {
    res.json({ message: error });
  }
});


module.exports = userRoute;
