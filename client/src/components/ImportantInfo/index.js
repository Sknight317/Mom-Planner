import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbarlogin from "../layout/NavbarLogin";
// import Slider from "../slider/index";
import API from "../utils/API"
import ShowPlacesBtn from "../ShowPlacesBtn";
// import $ from 'jquery';
// import axios from "axios";

// const config = {
//   headers: {'Authorization:' 'Bearer' process.env.YELP_API},
//   params: {
//     categories: 'Kids Activities',
//     location: 'Orlando, FL'
//   }
// };

class Connect extends Component {
   state = {
    businesses: [],
  };
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  searchYelp(term, location, sortBy){
    API.search(term, location, sortBy).then(businesses => {
       this.setState({businesses: businesses});
       console.log(this.state.businesses)
    });
}
  // componentDidMount() {
   
  
  //     return axios
  //       .get('https://api.yelp.com/v3/businesses/search', config)
  //       .then(responseJson => {
  //         console.log(responseJson)
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  
 
  // }
 

// loadPlaces = () => {
//   // const apiKey = process.env.YELP_API;
//   const myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/business_review_search";

//   $.ajax({
//     url      : myurl,
//      "headers": {
//       "Authorization": "Bearer ",
//     },
//     dataType : 'jsonp',
//     data     : {term : 'restaurant', location : 'Orlando, FL', categories : 'Kids Activities'}, // callback is not necessary
   
//     success  : function(data) {
//         // data is a normal response shown on yelp's API page
//         console.log(data)
//     }
// });
// }

  
render() {
    // const { user } = this.props.auth;
return (
  <div>
  <Navbarlogin />
      <div className="container valign-wrapper">
      
        <div className="row">
          <div className="col l12 center-align">
          
            <h4>
             
              <p className="flow-text grey-text text-darken-1">
                Convenient Place to store your important information.
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
          
          </div>
            
       
          
      </div>
      <div className="row">
          <div className="col l12 center-align">
          {/* <form method='POST' action='/search-location'> */}
	        <input type='text' placeholder='Enter zipcode..' name='zipcode'/>
              <ShowPlacesBtn className="waves-effect waves-light btn" onClick={this.searchYelp} >
                
              </ShowPlacesBtn>
              {/* </form> */}
          </div>
          </div>
      </div>
      
    );
  }
}
Connect.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Connect);
