/** Created by alexander on 6/04/2017. **/

import cover from '../../public/images/coverphoto.jpg'
import newyorkcityskyline from '../../public/images/newyorkcity.jpg'
import naturephoto1 from '../../public/images/naturephoto1.jpg'
import naturephoto2 from '../../public/images/naturephoto2.jpg'
import naturephoto3 from '../../public/images/naturephoto3.jpg'
import React, { Component } from 'react';
import {Carousel}  from 'react-bootstrap/lib/'
import './SlideImages.css'




/* Code voor carousel */

class Slideimages extends Component {

    render() {
        return (
            <div id="carousel" className="carousel">
                <Carousel>
                    <Carousel.Item>
                        <img  alt="1" src={cover}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  alt="2" src={naturephoto2}/>
                    </Carousel.Item>
                    <Carousel.Item>
                                <img  alt="3" src={naturephoto1}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="4" src={newyorkcityskyline}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="5" src={naturephoto3}/>
                    </Carousel.Item>
                </Carousel>
            </div>


        );
    }
}

export default Slideimages;