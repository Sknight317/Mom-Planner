const express = require("express");
const router = express.Router();
const EventController = require("../../controllers/EventController");
const passport = require("passport");
const User = require("../../models/user");
const Todo = require("../../models/Todo");
const Events = require("../../models/event");
require('../../config/passport')(passport);

// // Matches with "/api/todo"
// router.route("/")
// // passport.authenticate("jwt", { session: false })

//   .get(EventController.findAll)
//   .post(EventController.create);

// // Matches with "/api/todo/:id"
// router
//   .route("/:id")
//   // passport.authenticate("jwt", { session: false })
//   .get(EventController.findById)
//   .put(EventController.update)
//   .delete(EventController.remove);

// module.exports = router;

// Get all todos for a specific user
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let token = getToken(req.headers);
    console.log(token)
    if (token) {
    Events.find({ Userid: req.user._id })
      .then(events => {console.log(events)
        res.json(events)})
      .catch(err => console.log(err));
  }
  });

//Save Todo for a specific user
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let token = getToken(req.headers);
    console.log(token)
  if (token) {
    const Userid = req.user_id
    Events.create({Userid: req.user._id, 
                id: req.body.id, 
                title: req.body.title, 
                description: req.body.description,
                address: req.body.address,
                place: req.body.place,
                url: req.body.url,
                city: req.body.city,
                region: req.body.region,
                saved: true,
                imageUrl: req.body.imageUrl}, (err, post) => {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

getToken =  (headers) => {
  if (headers && headers.authorization) {
    let parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

  module.exports = router;
