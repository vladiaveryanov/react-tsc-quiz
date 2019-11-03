import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='row'>
        <div className='jumbotron col-10 offset-1'>
          <h1>Author Quiz</h1>
          <p>Select the book written by the author shown</p>
        </div>
      </div>
    );
  }
}
