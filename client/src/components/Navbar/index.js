import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import EventIcon from '@material-ui/icons/Event';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Calendar from "../Calendar/calendar";
import Connect from "../Connect/connect";
import Dashboard from "../dashboard/Dashboard";

import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import NoteIcon from '@material-ui/icons/Note';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import style from  "./style.css";
import Logoutbtn from "../Logoutbtn";

const font = 'Orbitron, sans-serif';

const font2 = 'Comfortaa, cursive';
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: 'black'
  },

};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false,
  };
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        {/* <FormGroup >
          <FormControlLabel
            control={
              <Switch checked={auth}   onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        <AppBar style={{ background: 'black' }} position="static">
          <Toolbar>
            <IconButton   onClick={this.toggleDrawer('left', true)}>
              <MenuIcon style={{fill: 'white'}} />
              
            </IconButton>
            <Typography style={{fontFamily: font2, fontSize: 30, color: 'white'}} variant="h6" className={classes.grow}>
            Note Plan-It
            </Typography>
            {auth && (
              <div>
                <IconButton 
                id="menu-buttons"
                 
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  
                  
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
         open={this.state.left}
         >
         <div className={classes.drawerHeader}>
          <IconButton onClick={this.toggleDrawer('left', false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className={classes.list}>
        <List>
          
            <ListItem button component={Link} to="/">
             <ListItemIcon><HomeIcon/></ListItemIcon> 
              <ListItemText primary="Home" />
            </ListItem>
             <ListItem button component={Link} to="/dashboard" >
            <ListItemIcon> <DashboardIcon /> </ListItemIcon> 
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/calendar" >
            <ListItemIcon> <NoteIcon /> </ListItemIcon> 
              <ListItemText primary="Notes" />
            </ListItem>
            <ListItem button component={Link} to="/connect" >
            <ListItemIcon> <EventIcon /> </ListItemIcon> 
              <ListItemText primary="Events" />
            </ListItem>
          
          
        </List>
        </div>
        </Drawer>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default withStyles(styles)(MenuAppBar);
connect(
  mapStateToProps,
  { logoutUser }
)(MenuAppBar);

