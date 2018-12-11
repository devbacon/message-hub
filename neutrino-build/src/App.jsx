/* eslint-disable */
import { Component } from 'react';
import axios from 'axios';

import './App.css';

import Conversation from './Conversation';

export default class App extends Component {
  state = {
    name: 'App',
  };

  componentDidMount() {
    axios.get('https://sec.meetkaruna.com/api/v1/conversations')
      .then((req, res) => {
        console.log(req, res);
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}</h1>
        <Conversation.List />
      </div>
    );
  }
}
