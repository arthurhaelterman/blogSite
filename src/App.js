import React, { Component } from 'react';
import './App.css';
import BlogList from './containers/BlogList'
import * as JsonService from "./service/JsonService";
import Header from './containers/Header';
import SlideImages from './containers/SlideImages';
import Welcome from './containers/Welcome';
import CreateBlog from "./components/CreateBlog";
import Footer from './containers/Footer';
import Loginmodal from './containers/Loginmodal';

class App extends Component {
  constructor(){
      super();
      this.state = {
          blogs: JsonService.getBlogsDummy().blogs,
          blogShow:false,
          welcomeShow:true,
          createBlogShow:false,
          loginShow: false,
      }
  }

      load(){
      return JsonService.getBlogsDummy().blogs;
  }

  createBlogClick () {
      this.setState ({blogShow:false,welcomeShow:false,createBlogShow:true,loginShow: false})
  }

  welcomeButtonClick() {
      this.setState({blogShow: true,welcomeShow:false,createBlogShow:false,loginShow: false})
  }

    titleClick() {
        this.setState({blogShow: false,welcomeShow:true,createBlogShow:false,loginShow: false})
    }
    loginClick() {
        this.setState({blogShow: false,welcomeShow:true,createBlogShow: false,loginShow: true})
    }

  render() {
      var blogs;
      var welcome;
      var createBlog;
      var login;
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
              createBlog = <CreateBlog/>

          /* Login */
      if (this.state.loginShow === true) {
          login = <Loginmodal/>
      }

      }
    return (
    <div id="App" className="App">
          <Header titleclick={this.titleClick.bind(this)} createclick={this.createBlogClick.bind(this)} loginclick={this.loginClick.bind(this)}/>
            {createBlog}
            {welcome}
            {blogs}
            {login}

      <Footer/>
      </div>


  );
  }
}

export default App;
