import React, { useState, useEffect } from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { getStorySummaries } from '../api/Story';
import StoryList from './StoryList';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 8,
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
}));


export default function Home(props) {
  var classes = useStyles();

  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStorySummaries(setStories);
  }, [])

  const handleReadClick = (id) => {
    props.history.push(`/reader/${id}`);
  }
  
  return (
    <Container maxWidth="md" className={classes.container}>
      { stories.length == 0 ?
        <Typography>No stories yet...</Typography> :
        <StoryList  stories={stories} onSelect={handleReadClick} />
      }
    </Container>
  );
}