import React, { Component } from 'react';
import {
  Typography, Box, Grid, Link
} from '@material-ui/core';

export default class Footer extends Component {
  render() {
    return (

      <Grid container justify="center" alignItems="center" >
            <Box p={2}>
              <Typography>
                All images are from&nbsp;
            <Link href="http://commons.wikimedia.org/wiki/Main_Page" variant="body2" >
                  Wikemedia Commons
            </Link>
                &nbsp;and are in the public domain
          </Typography>
            </Box>
        </Grid>
    );
  }
}
