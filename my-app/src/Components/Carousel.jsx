import React from 'react';
import bunnerimg from './Ad banner.png'
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
    return (
        <div className="carouselWrapper">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={bunnerimg} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={bunnerimg} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={bunnerimg} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;


