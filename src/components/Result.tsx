import React, { useContext } from 'react';

import {
  Card, CardContent, Typography, Box, Grid
} from '@material-ui/core';
import { AppDispatch } from '../interfaces/interfaces';

export default function Result() {

  const { contextData } = useContext(AppDispatch);
  let correctAnswersCount = 0;

  function generateResults(completedData: { [key: string]: any; }): string[] {
    let arr: string[] = [];

    for (let key in completedData) {
      let value = completedData[key];
      
      if (value.selectedValue !== value.correctAnswer) {
        arr.push(`${value.question} wrote "${value.correctAnswer}" not "${value.selectedValue}"`)
      } else {
        correctAnswersCount++;
      }
    }

    return arr;
  }

  let conclusion: string[] = generateResults(contextData.appData);
  
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
                Correct answers: {correctAnswersCount}
              </Typography>
            </Box>
            <Typography variant="h5" component="h2">
              Mistakes:
        </Typography>
            {
              conclusion.map(function (mistake, index) {
                return <Box bgcolor="secondary.main" color="secondary.contrastText" key={index} p={2} m={1}>
                  <Typography variant="body1">
                    {mistake}
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
