/* eslint-disable */
import { Component } from 'react';
import axios from 'axios';

import './App.css';

import Conversation from './Conversation';

export default class App extends Component {
  state = {
    conversations: null,
  };

  componentDidMount() {
    axios.get('https://sec.meetkaruna.com/api/v1/conversations')
      .then((res) => {
        this.setState({ conversations: res.data });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div className="App">
        <Conversation.List />
      </div>
    );
  }
}
