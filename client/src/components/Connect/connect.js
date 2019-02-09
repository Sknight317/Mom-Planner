import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import Navbarlogin from "../layout/NavbarLogin";
import Navbar from "../../components/Navbar"
import axios from "axios"
// import Slider from "../slider/index";
class Connect extends Component {
  state ={
    data: [],
    
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  getEvents=event=> {
    event.preventDefault();
    alert("clicked")
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let where = document.getElementById("where").value;
    axios.get(proxyurl + "http://api.eventful.com/json/events/search?app_key=8fh9T8QtjLVjwLvP&where=" + where + "&page_size=25")
        .then(result=> {
            // console.log(result)
            let items = [];
            for(var i in result.data.events.event) {
              items.push({
              
                title: result.data.events.event[i].title,
                description: result.data.events.event[i].description,
                city: result.data.events.event[i].city_name,
                region: result.data.events.event[i].region_name,
                start: result.data.events.event[i].start_time,
                end: result.data.events.event[i].stop_time,
                address: result.data.events.event[i].venue_address,
                place: result.data.events.event[i].venue_name,
                url: result.data.events.event[i].url,
                // image: result.data.events.event[i].image.medium[i].url,
              })
              this.setState({data: items })
            }
            // this.setState({items:JSON.stringify(result.data.events.event)})
            // this.setState({data:JSON.stringify(result.data.events.event)});
            console.log(this.state.data)
            // this.ConverData()
        });
       
  }
  
  // ConverData = () => {
  //       var items = this.state.items;
  //       var itemsData = this.state.itemsData;
  //       for (var i = 0; i < itemsData.length; i++) {
  //         items.push(
  //           itemsData.data[i].events[i].event
  //         )
  //         console.log(itemsData)
  //       }
  //     }
  // show_alert=()=> {
  //   var EVDB
  //   var where   = document.getElementById("where");
  //   var oArgs = {
  //             app_key: "8fh9T8QtjLVjwLvP" ,
  //             sort_order: "popularity",
  //             page_size: 25 ,
  //             where: where.value
  //   };
  //   EVDB.API.call("/events/get", oArgs, function(oData) {
  //       console.log(JSON.stringify(oData) );
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
    // const Items = this.state.data.map((item) =>
    //     <p key={item.id}>{item.title}</p>
    //     <p>{item.description}</p> 
    //     <p key={item.id}>{item.city}</p> 
    //     <p key={item.id}>{item.region}</p> 
    //     <p key={item.id}>{item.start}</p> 
    //     <p key={item.id}>{item.end}</p> 
    //     <p key={item.id}>{item.address}</p> 
    //     <p key={item.id}>{item.place}</p> 
    //     <p key={item.id}>{item.url}</p>  
    // );
return (
  
      <div className="container l12">
      <Navbar />
        <div className="row">
          <div className="col s12 m12 l12 center-align">
          
            <h4>
             
              <p className="flow-text grey-text text-darken-1">
                Find local events near you! </p>
                <h3>Type in your zip code to get started.</h3>
             
            </h4>
       </div>
       </div>     
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6 center-align">
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
              onClick={this.getEvents}
              className="waves-effect waves-light btn"
            >
              Search
            </button>
          </div>
          </div>
          </form>
     <div className="row">
        <div className="col s12 m12 l12 center-align">
        {this.state.data.length ? (
         
        <div>
        
       {this.state.data.map(items => {   
      return ( 
      //     <ListItem>
        <div key={items.id}
        className="box">
       
        <p>{items.description}</p> 
        <p>{items.city}</p> 
        <p>{items.region}</p> 
        <p>{items.start}</p> 
        <p>{items.end}</p> 
        <p>{items.address}</p> 
        <p>{items.place}</p> 
        <p>{items.url}</p>
        </div>
       
      //  </ListItem>
      
     
       
      )
    })}
      </div>
      ) : (
       <h3 className="notes"> No Notes Yet. </h3>
     )}
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
