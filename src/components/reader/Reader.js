import React from 'react';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 8,
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Reader(params) {
  var classes = useStyles();

  return (
    <Container  className={classes.container}>
      <Typography variant='h1'>
        Reader
      </Typography>
    </Container>
  );
}