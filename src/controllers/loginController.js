const User = require("../models/user");
const bcrypt = require("bcrypt");

const getLogin = (req, res) => {
  res.render("login");
};
const check = (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username: username })
      .then((existingUser) => {
          if (existingUser) {
            bcrypt
            .compare(password, existingUser.password)
                  .then((match) => {
                      if (match) {
                          req.session.user = {
                              username: existingUser.username,
                              email: existingUser.email,
                              role: existingUser.role,
                              firstname: existingUser.firstname,
                              lastname: existingUser.lastname,
                              phone: existingUser.phone,
                          };

                          res.redirect("/");
                      } else {

                          res.redirect("/login");
                      }
                  })
                  .catch((error) => {
                      res.send("Error: " + error.message);
                  });
          } else {
              res.redirect("/login");
          }
      })
      .catch((error) => {
          res.send("Error: " + error.message);
      });
};



module.exports = {
  getLogin,
  check,
};
