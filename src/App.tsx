import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AuthorQuiz from './components/AuthorQuiz';
import Result from './components/Result';
import { AppState, answer, AppDispatch } from './interfaces/interfaces';
import NoMatch from './components/NoMatch';

function correctUrl(url: string): boolean {
  return correctUrls.indexOf(url) > -1 ? true : false;
}
const correctUrls = ["/1", "/2", "/3", "/4", "/5", "/results"];

const routes = [
  {
    path: "/results",
    component: Result
  },
  {
    path: "/:page",
    component: () => AuthorQuiz({ numberOfQuestions: 5 })
  }
];

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

  function RouteWithSubRoutes(route) {
    if (correctUrl(route.location.pathname.toString())) {
      return (
        <Route path={route.path} render={props => (<route.component {...props} routes={route.routes} />)} />
      );
    } else {
      return (
        <NoMatch location={route.location.pathname} />
      );
    }

  }

  return (
    <AppDispatch.Provider value={{ dispatch, contextData }}>
      <Header />
      <Router>
        <Switch>
          <Redirect exact from='/' to='/1' />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </AppDispatch.Provider>

  );

}

export default App;
