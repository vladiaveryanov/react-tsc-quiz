import React, { Component } from 'react';
import {
  Typography,
  Grid,
  Box
} from '@material-ui/core';

export default class Header extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="center" >
        <Grid item>
            <Box width={300}>
            <Typography variant="h5" align="center">
              Author Quiz
            </Typography>
            <Typography color="textSecondary" variant="body1" align="center">
              Select the book written by the author shown
            </Typography>
            </Box>
        </Grid>
      </Grid>
    );
  }
}
