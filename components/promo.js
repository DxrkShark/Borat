import React, { useState, render } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ttt from './backbackground.jpg';
function Lol() {
    
    return (
      <div>
        <Carousel>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src='https://pmcvariety.files.wordpress.com/2020/10/borat-subsequent-moviefilm.png'
              alt="First slide"
              style={{height: '700px'}}
            />
            <Carousel.Caption>
              <h3>BORAT 2</h3>
              <p>Coming soon on October 23rd 2020!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i2.wp.com/www.theilluminerdi.com/wp-content/uploads/2020/09/BORAT-2.jpg"
              alt="Third slide"
              style={{height: '700px'}}
            />

            <Carousel.Caption>
              <h3>BORAT GOING BACK TO AMERICA</h3>
              <p>This is the first time since 2006!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.indiewire.com/wp-content/uploads/2020/09/MCDBORA_FE045.jpg"
              alt="Third slide"
              style={{height: '700px'}}
            />

            <Carousel.Caption>
              <h3>PLEASE DONATE TO SUPPORT</h3>
              <p>Borat needs money.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    );
  };



export default Lol
