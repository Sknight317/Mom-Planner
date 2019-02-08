import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import Navcss from "./style.css";

const font = 'Orbitron, sans-serif';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  
  Button: {
    '&hover': {
      boxShadow: '0 0.5em 0.5em -0.4em var(--hover) !important',
      transform: 'translateY(-0.25em) !important',
      fontWeight: 'bold'
    }
  }
  
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className="bar" position="static" style={{ background: 'black'}}>
        <Toolbar>
      
          <Typography style={{fontFamily: font, fontSize: 30, color: 'white', textAlign: 'center'}}>
            Note Plan-It
          </Typography>
          <div style={{float: 'right'}}>
          <Button className={classes.Button} style={{color: '#fa4a87'}} component={Link} to="/login" >Login</Button>
          <Button style={{color: '#fa4a87'}} component={Link} to="/register" >Register</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);