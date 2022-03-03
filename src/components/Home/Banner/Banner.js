import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container className="mb-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://img.arirang.com/A_UpFile/Template/TP170927111345_A1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Let's go</h3>
            <p>It feels good to be lost in the right direction</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.timeout.com/images/105599381/image.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Couple tour</h3>
            <p>Life is a journey, not a destination</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/flat-travel-background_23-2148050086.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="text-success">
            <h3>See the beauty of world </h3>
            <p>Travel is the only thing you buy that makes you richer</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
