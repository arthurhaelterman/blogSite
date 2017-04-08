import React, { Component } from 'react';
import './App.css';
import BlogList from './containers/BlogList'
import * as JsonService from "./service/JsonService";
import Header from './containers/Header';
import SlideImages from './containers/SlideImages';
import Welcome from './containers/Welcome';
import Createblog from './containers/Createblog';
import Footer from './containers/Footer'


class App extends Component {
  constructor(){
      super();
      this.state = {
          blogs: JsonService.getBlogsDummy().blogs,
          blogShow:false,
          welcomeShow:true,
          createBlogShow:false,
      }
  }

      load(){
      return JsonService.getBlogsDummy().blogs;
  }

  createBlogButtonCLick () {
          this.setState ({blogShow:false,welcomeShow:false,createBlogShow:true})
  }


  welcomeButtonClick(){
      this.setState({blogShow: true,welcomeShow:false,createBlogShow:false})
  }


    titleClick(){
        this.setState({blogShow: false,welcomeShow:true,createBlogShow:false})
    }


  render() {
      var blogs;
      var welcome;
      var createBlog;
          /* Loads blogs */
      if(this.state.blogShow ===  true){
          blogs = <BlogList show={this.state.blogShow} load={this.load.bind(this)} blogs={this.state.blogs}/>
      }

          /* Standard site */
      if(this.state.welcomeShow === true){
          welcome = <div>
              <SlideImages/>
              <Welcome click={this.welcomeButtonClick.bind(this)}/>
          </div>
      }


          /* Shows div to create blog */
      if(this.state.createBlogShow === true) {
              createBlog = <Createblog/>
      }
    return (
    <div id="App" className="App">
          <Header click={this.titleClick.bind(this)}/>

            {createBlog}
            {welcome}
            {blogs}
      <Footer/>
      </div>


  );
  }
}

export default App;
