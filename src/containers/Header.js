/**
 * Created by alexander on 6/04/2017.
 */

import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Modal, Button,MenuItem,NavDropdown,FormGroup,FormControl}  from 'react-bootstrap/lib/'
import accounticoon from '../../public/images/accounticoon.png'
import plussign from '../../public/images/plus sign.png'


/* Header van de site */
class Header extends Component {



    render() {
        return (
                <Navbar inverse collapseOnSelect id="mainheader">
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a id="header1" onClick={this.props.titleclick}>Blog of life</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem id="header2" href="#">Cancer</NavItem>
                                <NavItem id="header3" href="#">Drugs</NavItem>
                                <NavItem id="header4" href="#">Life</NavItem>
                                <NavItem id="header5" href="#">FAQ</NavItem>
                                <NavItem id="header6" href="#">Contact</NavItem>
                                    <NavItem id="Header7"><Button bsStyle="primary" id="createblogbutton" onClick={this.props.createclick}><img id="header7" src={plussign}></img></Button></NavItem>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#" id="mijnaccountknop">
                                    <Button onClick={this.props.loginclick}>
                                        <img src={accounticoon}></img>Log in</Button>
                                    </NavItem>
                                <NavItem eventKey={2} href="#">
                                    <FormGroup>
                                        <FormControl type="text" placeholder="Search" />
                                    </FormGroup></NavItem>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default Header;