import React from 'react';
import { Carousel } from 'react-bootstrap';

// import/host images from imgbb

const Banner = () => {
    return (
        <div id="home">
            <Carousel >
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/41kYKk5/mesut-kaya-e-Ocyhe5-9s-Q-unsplash.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>We help you to carve your own path from the endless outdoor recreation</h3>
                        <p>Travel for 80% less</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/CMdsG88/s-migaj-Yui5vf-KHuzs-unsplash.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We offer memorable peacefull moments</h3>
                        <p>Connect with Our personalize tour Specialist</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/VTFrxbD/dino-reichmuth-A5r-CN8626-Ck-unsplash.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Book your road trip with us</h3>
                        <p>Get the best deal</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;