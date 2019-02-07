import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import style from "./style.css"
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div>
      
      <Button variant="outlined" color="secondary" className={classes.button} component={Link} to="/register"  style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  height: "60px",
                  

                }}>
        Register
      </Button>
      
      
      
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);