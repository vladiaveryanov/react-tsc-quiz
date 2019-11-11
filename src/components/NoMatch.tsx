import React from 'react';
import {
  Typography,
  Grid,
  Box
} from '@material-ui/core';

export default function NoMatch({ location }) {
    return (
      <Grid container justify="center" alignItems="center" >
          <Grid item>
              <Box width={300}>
              <Typography variant="h5" align="center">
              <code>No match for {location}</code>
              </Typography>
              </Box>
          </Grid>
        </Grid>
    );
  }