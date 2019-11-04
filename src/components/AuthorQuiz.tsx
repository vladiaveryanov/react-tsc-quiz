import React, { useState, useContext } from 'react';
import * as interfaces from '../interfaces/interfaces';
import * as util from '../util';
import authors from '../data/authorData';

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  FormControl,
  Radio
} from '@material-ui/core';
import { useParams } from 'react-router-dom';

export default function AuthorQuiz() {
  const { page } = useParams();
  const [{ turnData: { author, books } }, setState] = useState({
    turnData: {
      ...util.getTurnData(authors, parseInt(page))
    }
  });

  // const [selectedAnswer, setSelectedAnswer] = useState({
  //   selectedAnswer: ''
  // });

  const dispatch = useContext(interfaces.AppDispatch);

  function handleAnswer() {

  }

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedAnswer({selectedAnswer: (event.target as HTMLInputElement).value});
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clickedAnswer = (event.target as HTMLInputElement).value;

    const answer = author.books.indexOf(clickedAnswer) > -1 ? interfaces.answerCorrect() : interfaces.answerWrong(clickedAnswer, author.books);  
    dispatch(answer);
  };

  console.log(author);
  return (
    <Card>
      <CardMedia
        className='somename'
        image={author.imageUrl}
        style={{ width: 200, height: 200 }}
        title='Lorem ipsum'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          Author: {author.name}
        </Typography>
      </CardContent>
      <CardActions>

        <FormControl component="fieldset">
          <RadioGroup aria-label="author" name="customized-radios">
            {books.map(function (name, index) {
              return <FormControlLabel
                value={name}
                key={index}
                control={<Radio />}
                label={name}
                onChange={
                  handleChange
                }
              />
            })}
          </RadioGroup>
        </FormControl>
      </CardActions>
      <CardActions>
        <Button variant="contained" size='medium' color='secondary' onClick={handleAnswer}>
          Previous
          </Button>
        <Button variant="contained" size='medium' color='secondary' onClick={handleAnswer}>
          Next
          </Button>
      </CardActions>
    </Card>
  );
}