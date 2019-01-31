const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("./routes/api/users");
const todoRoutes = require("./routes/api/todo")
// mongoose.plugin(schema => { schema.options.usePushEach = true });
// const routes = require("./routes");
// const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
// require('./models');

const URI = require("./config/index");

//Mongoose connection
mongoose.connect(process.env.MONGODB_URI || URI, { useNewUrlParser: true });

// When successfully connected
mongoose.connection.on('connected', () => {
	console.log('Established Mongoose Default Connection');
});

// When connection throws an error
mongoose.connection.on('error', err => {
	console.log('Mongoose Default Connection Error : ' + err);
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/", todoRoutes);

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// app.get('/', (req, res) => {
// 	res.send('Hello');
// });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});