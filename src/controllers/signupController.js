const bcrypt = require("bcrypt");
const User = require("../models/user");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const moment = require("moment");

const getSignupController = (req, res) => {
    res.render('signup');
};

const checkSignup = (req, res, next) => {
    const { email, username, phone, password } = req.body;
    if (!req.session.user) {
        User.findOne({ $or: [{ username: username }, { email: email },{ phone: phone }] })
        .then((existingUser) => {
            if (existingUser) {
                return res.render("signup", { error: "User details already exist" });
            } else {
                bcrypt.hash(password, 10)
                .then((hashedPassword) => {
                    const activationToken = crypto.randomBytes(32).toString("hex");
                    const newUser = new User({
                        email: email,
                        username: username,
                        phone: phone,
                        password: hashedPassword,
                    });

                    return newUser.save();
                })
                .then(() => {
                    res.redirect("/login");
                })
                .catch((error) => {
                    res.send("Error: " + error.message);
                });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
    } else {
        res.redirect("/login");
    }
};

module.exports = {
    getSignupController,
    checkSignup,
};
