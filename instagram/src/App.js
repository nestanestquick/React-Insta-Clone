import React, { Component } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostContainer from './Components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: []
    } 
  }

  componentDidMount() {
    this.setState({
      instaData: dummyData
    })
  }

  render() {
    return (
      <div className="App">

        <SearchBar />
        <PostContainer posts = {this.state.instaData} />
        
      </div>
    );
  }
}

export default App;