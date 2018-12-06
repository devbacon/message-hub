import { Component } from 'react';
import './App.css';

import Conversation from './Conversation';

export default class App extends Component {
  state = {
    name: 'App',
  };

  componentDidMount() {
    
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
