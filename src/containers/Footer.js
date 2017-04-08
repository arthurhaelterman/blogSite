/**
 * Created by alexander on 8/04/2017.
 */
import React, { Component } from 'react';
import './Footer.css'
import facebookicon from '../../public/images/facebookicon.png'
import instagramicon from '../../public/images/instagram icon.png'
import tumblricon from '../../public/images/tumblricon.png'
import youtubeicon from '../../public/images/youtubeicon.png'
import twittericon from '../../public/images/twittericon.png'
import {Navbar, Nav, NavItem, Modal, Button,MenuItem,NavDropdown,FormGroup,FormControl}  from 'react-bootstrap/lib/'


class Footer extends Component {

    render() {
        return (
            <div id="footer">
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#" id="footerhome">HOME</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Brand>
                        <a href="#" id="footerfacebook">FACEBOOK</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Brand>
                        <a href="#" id="footerblog">BLOG</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#" id="footercontact">CONTACT</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">FAQ</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullRight>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="#">Get the latest Blogs!</a>
                                </Navbar.Brand>
                                <Navbar.Toggle/>
                            </Navbar.Header>
                            <FormGroup>
                                <FormControl type="text" placeholder="Type your email adress" />
                            </FormGroup>
                            {' '}
                            <Button type="submit">Submit</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>

                </Navbar>


            </div>



        );
    }
}

export default Footer;