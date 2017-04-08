/**
 * Created by alexander on 6/04/2017.
 */

import React, { Component } from 'react';
import {Jumbotron,Button} from 'react-bootstrap/lib/'
import './Welcome.css'





class Welcome extends Component {

    render() {
        return (
            <Jumbotron id="welcometext">
                <h1>Hi everyone</h1>
                <p>I've been through alot of shit in my life and in this blog i will write about my experiences.<br/>You might learn of some stories, you might laugh of some, you might cry of some.<br/>Enjoy</p>
                <p><Button id="welcomebutton" onClick={this.props.click}>Thoughts</Button></p>
            </Jumbotron>
        );
    }
}

export default Welcome;
