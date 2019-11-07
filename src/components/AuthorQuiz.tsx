import React, { useState, useContext, useEffect } from 'react';
import * as interfaces from '../interfaces/interfaces';
import * as util from '../util';
import authors from '../data/authorData';
import { useParams, useHistory } from 'react-router-dom';
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
  Radio,
  Grid
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
  const { data, dispatch } = useContext(interfaces.AppDispatch);

  useEffect(() => {
    if (page !== currentPage) {
      setCurrentPage(page);
      // Page changed, load new turn data, reset selected answer.
      setTurnData(util.getTurnData(authors, page));
      setSelectedAnswer('');
    }

    if (Object.keys(data.appData).length > 0) {
      for (let key in data.appData) {
        let value = data.appData[key];
        if (value.page === page) {
          setSelectedAnswer(value.selectedValue);
        }
      }
    }

  }, [page]);

  function handleChange(event) {
    setSelectedAnswer(event.target.value);
  }

  function handleAnswer(moveToNextPage: boolean) {
    let nextPage: number = 0;
    const isAnswerCorrect = interfaces.answer(page, author.name, answer, selectedAnswer);
    console.log('tuk', isAnswerCorrect);
    dispatch(isAnswerCorrect);

    if (moveToNextPage) {
      nextPage = page + 1;
    } else {
      nextPage = page - 1;
    }

    if (currentPage === numberOfQuestions && moveToNextPage) {
      history.push('/results');
    } else {
      history.push('/' + nextPage);
    }
  };

  return (
    <Grid container justify="center" alignItems="center" >
      <Card>
        <CardMedia
          image={author.imageUrl}
          style={{ width: 340, height: 300 }}
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
          disabled={currentPage === 1}
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
    </Grid>
  );
}