import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../../components/Navbar";
import axios from "axios";
import style from "./style.css";
// import { CardList, CardListItem} from "../../components/Card";
import AddBtn from "../AddBtn";
import API from "../utils/API";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import ZipInput from "../ZipInput";
import Logoutbtn from "../Logoutbtn";
class Connect extends Component {
  state ={
    data: [],
    
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

add = id => {
  alert("button clicked");
const item = this.state.data.find(item => item.id === id);
   API.saveEvent({
        id: item.id,
        title: item.title,
        address: item.address,
        place: item.place,
        url: item.url,
        description: item.description,
        city: item.city,
        region: item.region,
        saved: true
      }).then(res => {
        console.log(res.data)
          this.notify();
      })
      .catch(err => {
      console.log(err)
        this.notify2();
      })
}

notify = () => {
  toast("Success: Event Saved!", {
  position: "top-center",
  autoClose: 5000,
  closeOnClick: true,
  draggable: true,
  className: css({
    background: 'green'
  }),
  bodyClassName: css({
    fontSize: '20px'
  }),
  progressClassName: css({
    background: "repeating-radial-gradient(circle at center, white, green 30px)"
  })
  })
}

notify2 = () => {
  toast("Sorry you have already saved this event.", {
  position: "top-center",
  autoClose: 5000,
  closeOnClick: true,
  draggable: true,
  className: css({
    background: 'red'
  }),
  bodyClassName: css({
    fontSize: '20px'
  }),
  progressClassName: css({
    background: "repeating-radial-gradient(circle at center, red 0, white)"
  })
  })
}
notify3 = () => {
  toast("Please enter a valid zip code.", {
  position: "top-center",
  autoClose: 5000,
  closeOnClick: true,
  draggable: true,
  className: css({
    background: 'blue'
  }),
  bodyClassName: css({
    fontSize: '20px',
    fontColor: 'black'
  }),
  progressClassName: css({
    background: "repeating-radial-gradient(circle at center, white 0, blue)"
  })
  })
}
search =event=> {
  event.preventDefault()
  this.getEvents()
}
checkZip=(where) => {
    return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(where);
    } 

  getEvents=()=> {
    
    alert("clicked")
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let where = document.getElementById("where").value;
    if (!this.checkZip(where)) {
    return this.notify3()
  } else {
    console.log(where)
    axios.get(proxyurl + "http://api.eventful.com/json/events/search?app_key=8fh9T8QtjLVjwLvP&where=" + where + "&page_size=25")
        .then(result=> {
            console.log(result)
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
                image: result.data.events.event[i].image,
                id: result.data.events.event[i].id
              })
            
              this.setState({data: items })
            }
            // this.setState({items:JSON.stringify(result.data.events.event)})
            // this.setState({data:JSON.stringify(result.data.events.event)});
            console.log(this.state.data)
            // this.ConverData()
        });
      } 
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
return (
  
      <div className="container l12" id="main">
      <Navbar />
      <ToastContainer />
        <div className="row">
          <div className="col s12 m12 l12 center-align pic">
          
            <h4 className="heading">
             
              <p className="flow-text grey-text text-darken-1">
                Find local events near you! </p>
                <p>Type in your zip code to get started.</p>
             
            </h4>
       </div>
       </div>
           <div class="row">  
      <div class="col s12 m12 l12 search center-align">
          {/* <div class="input-field col s6"> */}
            {/* <input placeholder="Type your zip code" id="where" type="text" class="validate" />
            <label for="zip_code"></label> */}
            <ZipInput
            placeholder="Type your zip code"
            type="text"
            className="where">
            </ZipInput>
            <Logoutbtn
              onClick={this.onLogoutClick}
              // className="waves-effect waves-light btn"
            >
              Logout
            </Logoutbtn>
            <Logoutbtn
              id="submit-button"
              onClick={this.search}
              // className="waves-effect waves-light btn"
            >
              Search
            </Logoutbtn>
          </div>
          {/* </div> */}
          </div>
    
        {this.state.data.length ? (
      <div className="container" id="contain">
      <div className="row grid">
       {this.state.data.map(items => {
         const city = items.city;
         const region = items.region;
         const location = city + ", "+ region; 
        //  const = items.image.url;
      return ( 
     
    <div className="col s12 m6 l3" id="column">  
  <div class="card small" key={items.id} >
  {/* <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src="#" alt="hello"/>
     <Thumbnail src={thumbnail} />
  </div> */}
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">{items.title}<i class="material-icons right">more_vert</i></span>
          <p>{items.place} </p>
          <p>{items.address}</p>
          <p>{items.location}</p>
          <AddBtn onClick={() => this.add(items.id)}/>
          {/* <a class="btn-floating halfway-fab waves-effect waves-light red" onClick={this.add}><i class="material-icons">add</i></a> */}
    <p><a rel="noreferrer noopener" target="_blank" href={items.url}>Click Here for more information.</a></p>
   
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Description<i class="material-icons right">close</i></span>
    <p>{items.description}</p>
  </div>
  </div>
   </div>
    
      )
    })}
   </div>
     </div> 
      ) : (
       <h3 className="notes"> No Events to Display. </h3>
     )}
 
  
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
