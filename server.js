const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const todo = require("./routes/api/todo");
const users = require("./routes/api/users");
const events = require("./routes/api/save-event");
require('dotenv').config();
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
app.use("/api/todo", todo);
app.use("/api/save-event", events)

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// router.get('/', (req, res) => {
// 	res.send({message:'Hello'});
// });

// config = {
//   headers: {
//     Authorization: 'Bearer '+ process.env.YELP_API,
//   },
//   params: {
//     term: 'Tourists Must See List',
//   }
// // let zipcode;

//     return axios
//       .get('https://api.yelp.com/v3/businesses/search', config)
//       .then(responseJson => {
//         console.log(responseJson)
//       })
//       .catch(error => {
//         console.log(error);
//       });
  
// 		zipcode = req.body.zipcode;
//         console.log(zipcode)
// 		if(!zipcode || zipcode.length < 5 || zipcode.length > 5) {
// 			res.redirect('/error');
// 		} else { 
// 			res.redirect('/important');
//         }
        



// //Function to get info from yelp api
// app.get( '/api/search-place',(req, res) => {

//     'use strict';
    
//     const yelp = require('yelp-fusion');
    
//     const apiKey = process.env.YELP_API
    
//     const searchRequest = {
//       term: "zoo",
//       categories:'Kids Activities',
//       location: "Orlando, FL"
//     };
    
//     const client = yelp.client(apiKey);
     
//     client.search(searchRequest).then(response => {
//       const Result = response.jsonBody.businesses;
//       const prettyJson = JSON.stringify(Result, null, 4);
//       console.log(prettyJson);
//     }).catch(e => {
//       console.log(e);
//       // res.redirect('/error');
//     });
      
    
    // })


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});