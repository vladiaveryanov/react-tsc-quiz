import React, { useContext } from 'react';

import {
  Card, CardContent, Typography, Box, Grid
} from '@material-ui/core';
import { AppDispatch } from '../interfaces/interfaces';

export default function Result() {
  const { data } = useContext(AppDispatch);
  return (
    <Grid container justify="center" alignItems="center" >
      <Grid item>
        <Card >
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              Quiz results:
        </Typography>
            <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
              <Typography variant="h5" component="h2">
                Correct answers: {data.correctAnswersCount}
              </Typography>
            </Box>
            <Typography variant="h5" component="h2">
              Mistakes:
        </Typography>
            {
              data.mistakes.map(function (book, index) {
                return <Box bgcolor="secondary.main" color="secondary.contrastText" key={index} p={2} m={1}>
                  <Typography variant="body1">
                    {book.question} wrote "{book.correctAnswer}"
            </Typography>
                </Box>
              })
            }
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
