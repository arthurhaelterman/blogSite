/**
 * Created by alexander on 6/04/2017.
 */

import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Modal, Button,MenuItem,NavDropdown}  from 'react-bootstrap/lib/'


class Header extends Component {

    render() {
        return (
                <Navbar inverse collapseOnSelect fixedTop="true" id="mainheader">
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">Thomas blog</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem  href="#">Afvallen</NavItem>
                                <NavItem  href="#">Drugs</NavItem>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">Link Right</NavItem>
                                <NavItem eventKey={2} href="#">Link Right</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>



        );
    }
}

export default Header;