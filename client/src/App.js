import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
// import Navbar from "./components/Navbar";
import Landing from "./components/Landing/Landing";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Connect from "./components/Connect/connect";
import Calendar from "./components/Calendar/calendar";
import ImportantInfo from "./components/ImportantInfo/index"
import './App.css';
// import Home from "./components/layout/Home";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
       
       <Route exact path="/" component={Landing} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/login" component={Login} />
       <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/connect" component={Connect} />
          <PrivateRoute exact path="/calendar" component={Calendar} />
          <PrivateRoute exact path="/important" component={ImportantInfo} />
          {/* <PrivateRoute exact path='/error' component={ErrorDisplay}/> */}
       </Switch>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
