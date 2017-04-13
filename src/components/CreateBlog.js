/**
 * Created by alexander on 7/04/2017.
 */

import React, { Component } from 'react';
import {Panel,Button,FormGroup,ControlLabel,FormControl,HelpBlock,FieldGroup}  from 'react-bootstrap/lib/'
import '../containers/SlideImages.css'
import {PageHeader,Modal,ModalHeader,ModalBody,ModalTitle,ModalFooter,} from 'react-bootstrap'
import './CreateBlog.css'


class CreateBlog extends Component {
    constructor(){
        super();
        this.state = {
           title: "",
           text:false,
           submitbutton:false,

        }
    }
    getValidationState(title) {
        const length = this.state.title.length;
        if (length > 10) title = 'success';
        else if (length > 5) title = 'warning';
        else if (length > 0) title = 'error';
    }
    handleChange(title) {
        this.setState({ value: this.title.target.value });
    }


    render() {
        return (
            <div>
            <div id="header">
                <PageHeader id="pageheader">Create a new blog!<br/> <small>Hi, this is were you create your blog. Its pretty self explanetory.<br/>Enjoy</small></PageHeader>
            </div>
                <form id="createblogtitle">
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                        bsSize="large"
                    >
                        <ControlLabel>Enter title of the blog</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.title}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                </form>
                <form id="createblogtext">
                    <FormGroup
                        controlId="formControlsTextarea"
                         bsSize="large">
                        <ControlLabel>Please enter the content of your blog below!</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea" />
                    </FormGroup>
                    <Button type="submit" id="submitbutton">
                        Submit
                    </Button>
                </form>



            </div>
        );
    }
}

export default CreateBlog;