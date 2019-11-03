import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AuthorQuiz from './components/AuthorQuiz';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/1' component={AuthorQuiz} />
      <Route path='/2' exact component={AuthorQuiz} />
      <Route path='/3' exact component={AuthorQuiz} />
      <Route path='/4' exact component={AuthorQuiz} />
      <Footer />
    </Router>
  );
}

export default App;
