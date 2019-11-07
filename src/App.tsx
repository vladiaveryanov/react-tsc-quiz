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
  console.log('AppReducer - inside func')
  switch (action.type) {
    case 'ANSWER_CORRECT':
      return {
        ...prevState,
        correctAnswersCount: prevState.correctAnswersCount + 1
      }
    case 'ANSWER_WRONG':
      return {
        ...prevState,
        mistakes: [...prevState.mistakes,
        { question: action.question, correctAnswer: action.correctAnswer }
        ]
      };
    default:
      return prevState;
  }
}

function App() {
  console.log('App - inside main func')
  const [reducer, dispatch] = useReducer(AppReducer, {
    mistakes: [],
    correctAnswersCount: 0
  });
  console.log(reducer);
  return (
    <AppDispatch.Provider value={{ dispatch, data: reducer }}>
      <Router>
        <Header />
        <Switch>
          <Redirect exact from='/' to='/1' />
          <Route exact path='/results'>
            <Result />
          </Route>
          <Route path='/:page'>
            <AuthorQuiz numberOfQuestions={5} />
          </Route>
          <Route path="*">
              Default
          </Route>
        </Switch>
          <Footer />
      </Router>
    </AppDispatch.Provider>
      );
    
    }
    
    export default App;
