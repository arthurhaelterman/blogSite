/**
 * Created by alexander on 7/04/2017.
 */

import React, { Component } from 'react';
import {Panel,Button,FormGroup,ControlLabel,FormControl,HelpBlock,FieldGroup}  from 'react-bootstrap/lib/'
import '../containers/SlideImages.css'
import {PageHeader,Modal,ModalHeader,ModalBody,ModalTitle,ModalFooter,} from 'react-bootstrap'
import './CreateBlog.css'
import * as JsonService from "../service/JsonService";


class CreateBlog extends Component {
    constructor(){
        super();
        this.state = {
           title:"",
           content:"",
           submitbutton:false,
            titleValidationState:"",
            titleValid:false

        }
    }

    blogTitleChange(event) {
        const titleLength = event.target.value.length;
        if (titleLength > 5){
            this.setState({title: event.target.value,titleValidationState: 'success',titleValid:true });
        }
        else if (titleLength <= 5){
            this.setState({title: event.target.value,titleValidationState:'error',titleValid:false });
        }

    }

    blogContentChange(event) {
        this.setState({content: event.target.value})
    }

    post(){
        var blog = JSON.stringify({title:this.state.title, content:this.state.content});
        alert(blog);
    }


    render() {
        return (
            <div>
            <div id="header">
                <PageHeader id="pageheader">Create a new blog!<br/> <small>Hi, this is were you create your blog. Its pretty self explanatory.<br/>Enjoy</small></PageHeader>
            </div>
                <form id="createblogtitle">
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.state.titleValidationState}
                        bsSize="large"
                    >
                        <ControlLabel>Enter title of the blog</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.title}
                            placeholder="Enter text"
                            onChange={this.blogTitleChange.bind(this)}
                        />
                    </FormGroup>
                </form>
                <form id="createblogtext">
                    <FormGroup
                        controlId="formControlTextarea"
                         bsSize="large">
                        <ControlLabel>Please enter the content of your blog below!</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea" onChange={this.blogContentChange.bind(this)} />
                    </FormGroup>
                    <Button onClick={this.post.bind(this)} id="submitbutton">
                        Submit
                    </Button>
                </form>



            </div>
        );
    }
}

export default CreateBlog;