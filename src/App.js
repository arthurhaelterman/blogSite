import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogList from './containers/BlogList'
import * as JsonService from "./service/JsonService";


class App extends Component {
  constructor(){
      super();
      this.state = {
          blogs: JsonService.getBlogsDummy().blogs
      }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <BlogList blogs={this.state.blogs}/>
      </div>
    );
  }
}

export default App;
