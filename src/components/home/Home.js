import React from 'react';
import { Container, Grid, Card, CardHeader, CardContent, Typography, makeStyles, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 8,
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
}));

const items = [
  {
    id: 0,
    title: 'The Maskin Project',
    subheader: '',
    description: `Robots with swords.  There really isn't much else to say about it.`,
  },
  {
    id: 1,
    title: `The Angel's Game`,
    subheader: '',
    description: `What would it be like to live a hundred lifetimes, trying to win an almost impossible game?`,
  },
]

export default function Home(props) {
  var classes = useStyles();

  const handleReadClick = (id) => {
    console.log(id);
    props.history.push(`/reader/${id}`);
  }
  
  return (
    <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={5} alignItems="flex-end">
          {items.map((item) => (
            <Grid item key={item.title} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardHeader
                  title={item.title}
                  subheader={item.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography variant="subtitle1" align="center">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container justify='center'>
                    <Button 
                      variant='contained' 
                      color="primary" 
                      onClick={() => handleReadClick(item.id)}
                    >
                      Read
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
}