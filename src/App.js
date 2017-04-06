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
          blogs: JsonService.getBlogsDummy().blogs,
          blogShow:false
      }
  }

  load(){
      return JsonService.getBlogsDummy().blogs;
  }

  welcomebuttonclick(){
      var children=document.getElementById("body").children;
      for(var i = 0; i < children.length; i++){
          children[i].style.display = "none";
      }
      this.setState({blogShow: true})
  }

  render() {
    return (
      <div id="App" className="App">
        <Header/>
          <div id="body">
        <SlideImages/>
        <Welcome click={this.welcomebuttonclick.bind(this)}/>
        <BlogList show={this.state.blogShow} load={this.load.bind(this)} blogs={this.state.blogs}/>
              </div>
      </div>

    );
  }
}

export default App;
