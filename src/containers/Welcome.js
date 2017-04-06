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
                <p>Im an interesting guy , here I release my thoughts in your brain.</p>
                <p><Button id="welcomebutton" onClick={this.props.click}>Thoughts</Button></p>
            </Jumbotron>
        );
    }
}

export default Welcome;
