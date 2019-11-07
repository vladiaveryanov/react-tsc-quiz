import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AuthorQuiz from './components/AuthorQuiz';
import Result from './components/Result';
import { AppState, answerCorrect, answerWrong, AppDispatch } from './interfaces/interfaces';

type AppAction = ReturnType<typeof answerCorrect | typeof answerWrong>;

function AppReducer(prevState: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ANSWER_CORRECT':
      return {
        ...prevState,
        correctAnswersCount: prevState.correctAnswersCount + 1,
        valuesSelectedOnPages: [...prevState.valuesSelectedOnPages, { page: action.page, selectedValue: action.selectedValue }]
      }
    case 'ANSWER_WRONG':
      return {
        ...prevState,
        mistakes: [...prevState.mistakes,
        { question: action.question, correctAnswer: action.correctAnswer }
        ],
        valuesSelectedOnPages: [...prevState.valuesSelectedOnPages, { page: action.page, selectedValue: action.selectedValue }]
      };
    default:
      return prevState;
  }
}

function App() {
  const [data, dispatch] = useReducer(AppReducer, {
    mistakes: [],
    correctAnswersCount: 0,
    valuesSelectedOnPages: []
  });
  console.log(data);
  return (
    <AppDispatch.Provider value={{ dispatch, data }}>
      <Router>
        <Switch>
          <Redirect exact from='/' to='/1' />
          <Route exact path='/results'>
            <Result />
          </Route>
          <Route path='/:page'>
            <Header />
            <AuthorQuiz numberOfQuestions={5} />
            <Footer />
          </Route>
          <Route path="*">
            Default
          </Route>
        </Switch>
      </Router>
    </AppDispatch.Provider>
  );

}

export default App;
