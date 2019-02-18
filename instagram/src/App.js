import React, { Component } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostContainer from './Components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      mainData: dummyData 
    }
  }
  

render(){
  return(
    <div>
      <SearchBar />
      <PostContainer postsarray = {this.state.mainData} />
    </div>
  )
}


}

export default App;