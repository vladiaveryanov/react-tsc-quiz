import React, { useState, useContext, useEffect } from 'react';
import * as interfaces from '../interfaces/interfaces';
import * as util from '../util';
import authors from '../data/authorData';
import { useParams, useHistory } from 'react-router-dom';
import Result from './Result';
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


export default function AuthorQuiz(
  { numberOfQuestions }: { numberOfQuestions: number }) {
  const history = useHistory();
  const { page: pageAsStr } = useParams();
  const page = parseInt(pageAsStr);

  const [turnData, setTurnData] = useState(util.getTurnData(authors, page));
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentPage, setCurrentPage] = useState(page);
  const { author, books, answer } = turnData;
  const { dispatch } = useContext(interfaces.AppDispatch);

  useEffect(() => {
    if (page !== currentPage) {
      setCurrentPage(page);
      // Page changed, load new turn data, reset selected answer.
      setTurnData(util.getTurnData(authors, page));
      setSelectedAnswer('');
    }
  }, [page]);

  function handleChange(event) {
    setSelectedAnswer(event.target.value);
  }

  function handleAnswer(moveToNextPage: boolean) {
    let nextPage: number = 0;
    const isAnswerCorrect = (answer === selectedAnswer) ? interfaces.answerCorrect() 
      : interfaces.answerWrong(author.name, answer);
    dispatch(isAnswerCorrect);

    if (moveToNextPage) {
      nextPage = page + 1;
    } else {
      nextPage = page - 1;
    }

    if (page >= numberOfQuestions) {
      history.push('/results');
    } else {
      history.push('/' + nextPage);
    }
  };

  return (
    <Card>
      <CardMedia
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
          <RadioGroup aria-label="author" name="customized-radios" 
            value={selectedAnswer} onChange={handleChange}>
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
      <Button variant="contained"
        size='medium'
        color='secondary'
        onClick={() => handleAnswer(false)}>
        Previous
      </Button>
      <Button variant="contained"
        size='medium'
        color='secondary'
        disabled={!selectedAnswer}
        onClick={() => handleAnswer(true)}>
        Next
      </Button>
    </Card>
  );
}