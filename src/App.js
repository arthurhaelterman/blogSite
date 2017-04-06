import React, { Component } from 'react';
import './App.css';
import cover from '../public/images/coverphoto.jpg'
import BlogList from './containers/BlogList'
import * as JsonService from "./service/JsonService";
import Header from './containers/Header';
import Image from 'react-bootstrap';




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
        <Header/>
              <img src={cover} />
        <BlogList blogs={this.state.blogs}/>
      </div>
    );
  }
}

export default App;
