/* eslint-disable */
import { Component } from 'react';
import axios from 'axios';

import './App.css';

import Conversation from './Conversation';
import { all } from 'rsvp';

export default class App extends Component {
  state = {
    conversations: null,
  };

  componentDidMount() {
    axios.get('https://sec.meetkaruna.com/api/v1/conversations')
      .then((res) => {
        const conversationPromises = [], pageTotal = Math.ceil(res.data.total / res.data.per_page);
        
        for(let i = 0; i < pageTotal; i++) {
          const currentConversations = axios.get(`https://sec.meetkaruna.com/api/v1/conversations?page=${i}`);
          conversationPromises.push(currentConversations);
        }

        Promise.all(conversationPromises)
          .then((res) => {
            const allConversations = res.reduce((curr, response) => curr.concat(response.data.data), []);

            this.setState({ conversations: allConversations });
          });
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
