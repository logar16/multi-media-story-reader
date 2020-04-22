import React, { useEffect, useState } from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { getStory } from '../api/Story';
import Markdown from './markdown/Markdown';


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

  let {storyId} = useParams();

  const [story, setStory] = useState();

  useEffect(() => {
    getStory(storyId, setStory);
  }, []);

  // console.log(story);

  return (
    <Container  className={classes.container}>
      <Typography variant='h1'>
        Reader
      </Typography>
      <Markdown>
        {story ? story.text : ''}
      </Markdown>
    </Container>
  );
}