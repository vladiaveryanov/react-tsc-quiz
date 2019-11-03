import React, { Component, useState } from 'react';
import * as interfaces from '../interfaces/interfaces';
import * as util from '../util';
import authors from '../data/authorData';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';

export interface Authors {
  name: string;
  imageUrl: string;
  books: string[];
}

export interface Props {
  author?: Authors;
  books?: string[];
}

export interface State {
  author?: Authors;
  books?: string[];
}

export default class AuthorQuiz extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      author: util.getTurnData(authors).author,
      books: util.getTurnData(authors).books
    };
  }
  // authorAndBooks = util.getTurnData(authors);
  // componentWillMount() {
  //   this.setState(this.authorAndBooks);
  // }
  render() {
    console.log(this.state);
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            className='somename'
            src={this.state.author.imageUrl}
            style={{ height: '100%', width: '100%' }}
            title='Lorem ipsum'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Author: {this.state.author.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            {this.state.books[0]}
          </Button>
          <Button size='small' color='primary'>
            {this.state.books[1]}
          </Button>
          <Button size='small' color='primary'>
            {this.state.books[2]}
          </Button>
          <Button size='small' color='primary'>
            {this.state.books[3]}
          </Button>
        </CardActions>
        <CardActions>
          <Button size='medium' color='secondary'>
            Previous
          </Button>
          <Button size='medium' color='secondary'>
            Next
          </Button>
        </CardActions>
      </Card>
    );
  }
}
