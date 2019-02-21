import React, { Component } from 'react';
import './App.css';
import PostsPage from './Components/PostContainer/PostsPage';
import Authenticate from './components/authenticate/authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);