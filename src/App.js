import React, { Component } from 'react';
import './App.css';
import BlogList from './containers/BlogList'
import * as JsonService from "./service/JsonService";
import Header from './containers/Header';
import SlideImages from './containers/SlideImages';
import Welcome from './containers/Welcome';



class App extends Component {
  constructor(){
      super();
      this.state = {
          blogs: JsonService.getBlogsDummy().blogs
      }
  }

  load(){
      return JsonService.getBlogsDummy();
  }

  welcomebuttonclick(){
      document.getElementById("carousel").style.display = "none";
      document.getElementById("welcometext").style.display = "none";
      document.getElementById("blogs").style.display = "inline";
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <SlideImages/>
        <Welcome click={this.welcomebuttonclick.bind(this)}/>
        <BlogList load={this.load.bind(this)} blogs={this.state.blogs}/>
      </div>

    );
  }
}

export default App;
