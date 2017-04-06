/**
 * Created by alexander on 6/04/2017.
 */
import cover from '../../public/images/coverphoto.jpg'
import weedphoto from '../../public/images/weed.jpg'
import React, { Component } from 'react';
import {Carousel}  from 'react-bootstrap/lib/'
import './SlideImages.css'


class Slideimages extends Component {

    render() {
        return (
            <div id="Carousel" class="carousel">
                <Carousel>
                    <Carousel.Item>
                        <img  alt="1" src={cover}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  alt="2" src={weedphoto}/>
                    </Carousel.Item>
                </Carousel>
                );



            </div>


        );
    }
}

export default Slideimages;