/**
 * Created by alexander on 6/04/2017.
 */
import cover from '../../public/images/coverphoto.jpg'
import weedphoto from '../../public/images/weed.jpg'
import React, { Component } from 'react';
import {Carousel}  from 'react-bootstrap/lib/'
import './SlideImages.css'
import deman from '../../public/images/hitler.jpg'
import newyorkcityskyline from '../../public/images/newyorkcity.jpg'

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
                        <img  alt="2" src={weedphoto}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  alt="3" src={deman}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="4" src={newyorkcityskyline}/>
                    </Carousel.Item>
                </Carousel>
            </div>


        );
    }
}

export default Slideimages;