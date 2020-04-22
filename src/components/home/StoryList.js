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

export default function StoryList({stories, onSelect}) {
  var classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={5} alignItems="flex-end">
        {stories.map((story) => (
          <Grid item key={story.title} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardHeader
                title={story.title}
                subheader={story.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent>
                <Typography variant="subtitle1" align="center">
                  {story.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container justify='center'>
                  <Button
                    variant='contained'
                    color="primary"
                    onClick={() => onSelect(story.id)}
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