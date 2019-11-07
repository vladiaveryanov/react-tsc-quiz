import React, { Component, useContext } from 'react';

import {
  Button, Card, CardContent, Typography, CardActions
} from '@material-ui/core';
import { AppDispatch } from '../interfaces/interfaces';

export default function Result() {
  const { data } = useContext(AppDispatch);
  return (
    <p>test: {data.correctAnswersCount}</p>
    //   <Card >
    //   <CardContent>
    //     <Typography color="textSecondary" gutterBottom>
    //       Word of the Day
    //     </Typography>
    //     <Typography variant="h5" component="h2">
    //       be
    //       nev
    //       lent
    //     </Typography>
    //     <Typography color="textSecondary">
    //       adjective
    //     </Typography>
    //     <Typography variant="body2" component="p">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}
