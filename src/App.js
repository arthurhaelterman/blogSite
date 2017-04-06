import React, { Component } from 'react';
import './App.css';
import BlogList from './containers/BlogList'
import * as JsonService from "./service/JsonService";
import Header from './containers/Header';
import SlideImages from './containers/SlideImages';




class App extends Component {
  constructor(){
      super();
      this.state = {
          blogs: JsonService.getBlogsDummy().blogs
      }
  }

  load(){
      return JsonService.getBlogs();
  }

  render() {
    return (
      <div className="App">
      <Header/>
        <SlideImages/>
        <BlogList blogs={this.state.blogs}/>
      </div>
    );
  }
}

export default App;
