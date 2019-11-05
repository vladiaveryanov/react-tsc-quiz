import React, { useState, useContext } from 'react';
import * as interfaces from '../interfaces/interfaces';
import * as util from '../util';
import authors from '../data/authorData';
import { useParams, Link } from 'react-router-dom';

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Radio
} from '@material-ui/core';
import { AppDispatch } from '../interfaces/interfaces';


export default function AuthorQuiz() {
  const { page } = useParams();
  const [{ turnData: { author, books, answer }, selectedAnswer }, setState] = useState({
    turnData: {
      ...util.getTurnData(authors, parseInt(page))
    },
    selectedAnswer: ''
  });

  const dispatch = useContext(interfaces.AppDispatch);

  function handleChange(event) {
    setState({
      turnData: {
        author: author,
        books: books,
        answer: answer
      },
      selectedAnswer: event.target.value
    })
  }

  function handleAnswer() {

    const isAnswerCorrect = (answer === selectedAnswer) ? interfaces.answerCorrect() : interfaces.answerWrong(selectedAnswer, author.books);
    dispatch(isAnswerCorrect);
  };
  let prevPage = `/${parseInt(page) - 1}`;
  let nextPage =`/${parseInt(page) + 1}`;
  return (
    <Card>
      <CardMedia
        image={author.imageUrl}
        style={{ width: 200, height: 200 }}
        title='Lorem ipsum'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          Author: {author.name} {page.match}
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl component="fieldset">
          <RadioGroup aria-label="author" name="customized-radios" onChange={handleChange}>
            {books.map(function (name, index) {
              return <FormControlLabel
                value={name}
                key={index}
                control={<Radio />}
                label={name}
              />
            })}
          </RadioGroup>
        </FormControl>
      </CardActions>
      {/* <AppDispatch.Consumer> */}
        <Button variant="contained" size='medium' color='secondary' onClick={handleAnswer}>
          <Link to={prevPage}>
            Previous
          </Link>
        </Button>
      {/* </AppDispatch.Consumer> */}
      <Button variant="contained" size='medium' color='secondary' onClick={handleAnswer}>
        <Link to={nextPage} >
          Next
        </Link>
      </Button>
    </Card>
  );
}