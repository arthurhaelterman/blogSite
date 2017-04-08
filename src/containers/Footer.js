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
class Footer extends Component {

    render() {
        return (
            <footer>
                <table>
                    <tr id="tablerow1">
                        <td>Social Media</td>
                        <td>Contact us</td>
                        <td>About us</td>
                    </tr>
                    <tr id="tablerow2">
                        <td>Facebook<a href="#"><img id="facebookiconfooter" src={facebookicon}></img></a></td>
                        <td>Mail</td>
                        <td>Who are we?</td>
                    </tr>
                    <tr id="tablerow3">
                        <td>Instagram<a href="#"><img id="instagramiconfooter" src={instagramicon}></img></a></td>
                        <td>Telephone</td>
                        <td>Our story</td>
                    </tr>
                    <tr id="tablerow4">
                        <td>Twitter<a href="#"><img id="twittericonfooter" src={twittericon}></img></a></td>
                        <td>Come to our office</td>
                        <td>Disclaimers</td>
                    </tr>
                    <tr>
                        <td>Tumblr<a href="#"><img id="tumblriconfooter" src={tumblricon}></img></a></td>
                        <td>Contact for business</td>
                        <td>Ca$h me outside</td>
                    </tr>
                    <tr>
                        <td>Youtube<a href="#"><img id="youtubeiconfooter" src={youtubeicon}></img></a></td>
                        <td>Complaints</td>
                        <td>Donate(not needed but much appreciated!)</td>
                    </tr>
                </table>
                <p id="copyrightfooter">&copy; Blog of life</p>
           </footer>



        );
    }
}

export default Footer;