import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { timingSafeEqual } from 'crypto';

const Greet = props => {
  let { message1, message2 } = props;
  return (
    <div>
      <h1>{message1}</h1>
      <p />
      <h2>{message2}</h2>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      greeting: 'Welcome to state',
      message: '',
      movies: [
        { title: 'I am Legend' },
        { title: 'Avengers' },
        { title: 'Star Trek' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Greet message1="Hi from component " message2="This is message 2" />

        <label>
          <h3>{this.state.greeting}</h3>
        </label>
        <p />
        <ul>
          {this.state.movies.map(movie => {
            return <li>{movie.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
