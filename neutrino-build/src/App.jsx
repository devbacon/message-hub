import { Component } from 'react';
import './App.css';

import Conversation from './Conversation';

export default class App extends Component {
  state = {
    name: 'App',
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}</h1>
        <Conversation.List />
      </div>
    );
  }
}
