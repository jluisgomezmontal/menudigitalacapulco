import React from 'react'
import { Carousel } from 'react-bootstrap';
import hm1 from '../img/hm1.jpeg';
import hm2 from '../img/hm2.jpeg';
import hm3 from '../img/hm3.jpeg';

export const Carousell = () => {
    return (
        <div>
          <Carousel fade nextLabel="" prevLabel="" touch>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={hm1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={hm2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={hm3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

        </div>
    )
}
