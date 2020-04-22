import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, AppBar, makeStyles, Toolbar, Typography, Breadcrumbs } from '@material-ui/core';
import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  appBar: {
    
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

export function TopBar(props) {
  var classes = useStyles();
  

  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={2} 
      className={classes.appBar}
    >    
      <Toolbar  className={classes.toolbar}>
          <Typography variant='h4'  className={classes.toolbarTitle}>
            {props.display}
          </Typography>
          
      </Toolbar>
    </AppBar>
  );
}

  