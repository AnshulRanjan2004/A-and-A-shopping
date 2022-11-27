import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import Button from 'react-bootstrap/Button';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://player.vimeo.com/external/274645324.sd.mp4?s=75fb119219002bc092e045853b62209ace9ef282&profile_id=164&oauth2_token_id=57447761' autoPlay loop muted />
      <h1>FASHION AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          GET STARTED
        </Button> */}
        <Button variant='info' href='/products'>GET STARTED</Button>
      </div>
    </div>
  );
}

export default HeroSection;
