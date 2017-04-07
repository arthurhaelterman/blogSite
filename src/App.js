import React, { Component } from 'react';
import './App.css';
import BlogList from './containers/BlogList'
import * as JsonService from "./service/JsonService";
import Header from './containers/Header';
import SlideImages from './containers/SlideImages';
import Welcome from './containers/Welcome';
import {Fade,Well} from 'react-bootstrap/lib'



class App extends Component {
  constructor(){
      super();
      this.state = {
          blogs: JsonService.getBlogsDummy().blogs,
          blogShow:false,
          welcomeShow:true,
          createBlogShow:false
      }
  }

  load(){
      return JsonService.getBlogsDummy().blogs;
  }

  welcomeButtonClick(){
      this.setState({blogShow: true,welcomeShow:false})
  }

    titleClick(){
        this.setState({blogShow: false,welcomeShow:true})
    }

  render() {
      var blogs;
      var welcome;
      if(this.state.blogShow ===  true){
          blogs = <BlogList show={this.state.blogShow} load={this.load.bind(this)} blogs={this.state.blogs}/>
      }
      if(this.state.welcomeShow === true){
          welcome = <div id="welcome">
              <SlideImages/>
              <Welcome click={this.welcomeButtonClick.bind(this)}/>
          </div>
      }
    return (
      <div id="App" className="App">
        <Header click={this.titleClick.bind(this)}/>
          {welcome}
          {blogs}
      </div>
    );
  }
}

export default App;
