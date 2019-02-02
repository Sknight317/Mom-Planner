// const express = require("express");
// const router = express.Router();
// const fetch = require('node-fetch');


//function to grab user's zip code from search places page
// 	let zipcode;

// 	router.post('/search-location', (req, res) => {

// 		zipcode = req.body.zipcode;
//         console.log(zipcode)
// 		if(!zipcode || zipcode.length < 5 || zipcode.length > 5) {
// 			res.redirect('/error');
// 		} else { 
// 			res.redirect('/important');
//         }
        
// 	})


// //Function to get info from yelp api
// router.get('/search-place', (req, res) => {

 
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
//     });
      
    
//     })

//     module.exports = router;