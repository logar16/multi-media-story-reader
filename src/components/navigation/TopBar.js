import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    marginBottom: 5,
  },
}));

export function TopBar(props) {
  var classes = useStyles();
  

  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={0} 
      className={classes.appBar}
    >    
      <Toolbar>
          <Typography variant='h4'>
            {props.display}
          </Typography>
      </Toolbar>
    </AppBar>
  );
}


{/* <li>
  <Link to={ROUTES.LANDING}>Landing</Link>
</li>
<li>
  <Link to={ROUTES.HOME}>Home</Link>
</li>
<li>
  <Link to={ROUTES.ADMIN}>Admin</Link>
</li> */}
  