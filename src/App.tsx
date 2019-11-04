import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AuthorQuiz from './components/AuthorQuiz';
import Result from './components/Result';
import { AppState, answerCorrect, answerWrong, AppDispatch } from './interfaces/interfaces';

type AppAction = ReturnType<typeof answerCorrect | typeof answerWrong>;

function AppReducer(prevState: AppState, action: AppAction): AppState {
  console.log('inside reducer',action);
  switch (action.type) {
    case 'ANSWER_CORRECT':
      return {
        ...prevState,
        correctAnswersCount: prevState.correctAnswersCount + 1
      }
    case 'ANSWER_WRONG':
      return {
        ...prevState,
        mistakes: [...prevState.mistakes, { question: action.question, correctAnswer: action.correctAnswer }]
      };
    default:
      return prevState;
  }
}

function App() {
  const [reducer, dispatch] = useReducer(AppReducer, {
    mistakes: [],
    correctAnswersCount: 0
  });
  console.log('state', reducer)
  return (
    <AppDispatch.Provider value={dispatch}>
      <Router>
        <Header />
        <Route path='/:page'>
          <AuthorQuiz />
        </Route>
        <Route path='/results'>
          { /* TODO implementation */ }
          <Result />
        </Route>
        <Footer />
      </Router>
    </AppDispatch.Provider>
  );

}

export default App;
