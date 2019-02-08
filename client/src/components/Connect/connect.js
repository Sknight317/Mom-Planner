import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import Navbarlogin from "../layout/NavbarLogin";
import Navbar from "../../components/Navbar"
import $ from 'jquery'
// import Slider from "../slider/index";
class Connect extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  show_alert=()=> {
    declare var EVDB
    var where   = document.getElementById("where");
    var oArgs = {
              app_key: "8fh9T8QtjLVjwLvP" ,
              sort_order: "popularity",
              page_size: 25 ,
              where: where.value
    };
    EVDB.API.call("/events/get", oArgs, function(oData) {
        console.log(JSON.stringify(oData) );
      });
  }
  
  // show_alert2=()=> {
     
  //   //  var query   = document.getElementById("query");
  //    var oArgs = {
  //       app_key: "5f01abe127f1d92148ab7ddf1ddf0099",
  //       q: query.value,
  //       where: where.value,
  //       "date": "2013061000-2015062000",
  //       "include": "tags,categories",
  //       page_size: 5,
  //       sort_order: "popularity",
  //    };
  //    EVDB.API.call("/events/search", oArgs, function(oData) {
  //       alert("your myObject is " + JSON.stringify(oData));
  //     });
  // }

  // findGroups = (url, cb, data) => {
  //   if(!data) data = [];
    
  //   $.ajax({
      
  //     dataType:'jsonp',
  //     method:'get',
  //     url:url,
  //     success:(result)=> {
  //       console.log('back with ' + result.data.length +' results');
  //       console.dir(result);
      
  //       //add to data
  //       data.push.apply(data, result.data);
  //       if(result.meta.next_link) {
  //         var nextUrl = result.meta.next_link;
  //         this.findGroups(nextUrl, cb, data);
  //       } else {
  //         cb(data);	
  //       }
  //     },
  //     error: function (jqXHR, textStatus, errorThrown) {
  //       if (jqXHR.status == 500) {
  //           alert('Internal error: ' + jqXHR.responseText);
  //       } else {
  //           alert('Unexpected error.');
  //       }
  //   }
  //   });	
    
  // }
  
  // Find = event => {
  //     alert("submit button clicked")
  //   event.preventDefault()
  //   var $results = $("#results");
  //   let zip = $("#zip_code").val().trim();
  //   console.log(zip);
  //   this.findGroups("https://api.meetup.com/find/groups?photo-host=public&zip="+ zip +"&page=20&text=mom&sig_id=251073893&sig=2b54ead2bba5422f2286ae9d90e4cfbc43852b7b&callback=?",(res) => {
  //     console.log("totally done");
  //     console.dir(res);	
  
  //     var s = "";
  //     for(var i=0;i<res.length; i++) {
  //       var group = res[i];
  //       s += "<h2>"+(i+1)+" <a href='"+group.link+"'>"+group.name+"</a></h2>";
  //       if(group.group_photo && group.group_photo.thumb_link) {
  //         s += "<img src=\"" + group.group_photo.thumb_link + "\" align=\"left\">";
  //       }
  //       s += "<p>Location: "+group.city + ", " + group.state + " " + group.country + "</p><br clear=\"left\">";
  //     }
  //     $results.html(s);
  //   })
        
  // }

render() {
    const { user } = this.props.auth;
return (
  <div>
  <Navbar />
      <div className="container valign-wrapper">
      
        <div className="row">
          <div className="col l12 center-align">
          
            <h4>
             
              <p className="flow-text grey-text text-darken-1">
                Connect with other moms in your area! </p>
                <h3>Type in your zip code to find mom groups near you.</h3>
             
            </h4>
            
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="Type your zip code" id="where" type="text" class="validate" />
            <label for="zip_code"></label>
            <button
              id="submit-button"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.Find}
              className="waves-effect waves-light btn"
            >
              Search for mom's in your area
            </button>
          </div>
          </div>
          </form>

          </div>
          
          </div>
            
      
          
      </div>
       <div id="results"></div>
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
