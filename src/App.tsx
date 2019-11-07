import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AuthorQuiz from './components/AuthorQuiz';
import Result from './components/Result';
import { AppState, answer, AppDispatch } from './interfaces/interfaces';

type AppAction = ReturnType<typeof answer>;

function AppReducer(prevState: AppState, action: AppAction): AppState {
  let allData = prevState;
  allData.appData[action.page] = action;
  switch (action.type) {
    case 'ANSWER':
      return {
        appData: allData.appData
      };
    default:
      return prevState;
  }
}

function App() {
  const [contextData, dispatch] = useReducer(AppReducer, {
    appData: {}
  });
  console.log(contextData);
  return (
    <AppDispatch.Provider value={{ dispatch, contextData }}>
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
