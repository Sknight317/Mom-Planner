const express = require("express");
const router = express.Router();
const config = require("../../config/index");
const bcrypt = require("bcryptjs");
const jsonwt = require("jsonwebtoken");

//  validation
const validateRegistrationInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// User model
const User = require("../../models/user");


// Post function to add a new user to the database
// for api/users/register
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  // If it is not the valid format; return a 400 status
    if (!isValid) {
      return res.status(400).json(errors);
    }
//Use mongo findone to find if there is a user in the database with the email the user entered
  User.findOne({ email: req.body.email }).then(user => {
      //If there is return 400 status
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } 
      // Create a new user with the information the user provided; only if their email is not already in the database
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          // Store the password in the database
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    })
});

//Post for api/users/login
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
        router.post("/login", (req, res) => {
            // Form validation
          const { errors, isValid } = validateLoginInput(req.body);
          // Check validation
            if (!isValid) {
              return res.status(400).json(errors);
            }
          const email = req.body.email;
            const password = req.body.password;
          // Find user by email
            User.findOne({ email }).then(user => {
              // Check if user exists
              if (!user) {
                return res.status(404).json({ emailnotfound: "Email not found" });
            }
            // Check password
                bcrypt.compare(password, user.password).then(isMatch => {
                  if (isMatch) {
                    // User matched
                    // Create JWT Payload
                    const payload = {
                      id: user.id,
                      name: user.name
                    };
            // Sign token
                    jwt.sign(
                      payload,
                      keys.secretOrKey,
                      {
                        expiresIn: 31556926 // 1 year in seconds
                      },
                      (err, token) => {
                        res.json({
                          success: true,
                          token: "Bearer " + token
                        });
                      }
                    );
                  } else {
                    return res
                      .status(400)
                      .json({ passwordincorrect: "Password incorrect" });
                    }
                })
                  });
                });
            }
              });
            })

              module.exports = router;