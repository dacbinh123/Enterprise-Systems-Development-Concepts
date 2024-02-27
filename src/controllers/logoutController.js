const User = require('../models/user');

const logout = async (req, res) => {
  try {
    const {username} = req.session.user;
    const existingUser = await User.findOneAndUpdate({ username: username }, { new: true });
    req.session.destroy((err) => {
      if (err) {
        console.error("Error while logging out: " + err);
      }
      res.redirect('/login');
    });
  } catch (error) {
    res.send("Error: " + error.message);
  }
};

module.exports = {
  logout
};