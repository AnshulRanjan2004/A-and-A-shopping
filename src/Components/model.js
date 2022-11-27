import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './model.css';
import Button from 'react-bootstrap/Button';
import './shirt1.html';


function Model() {
  return (
    <div className='model-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>3D Model</h1>
      <p>What are you waiting for?</p>
      <a href='C:\Users\anves\OneDrive\Documents\GitHub\A-and-A-shopping\src\Components\3D_models\shirt1.html'>Click Here</a>
      <div className='model-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          GET STARTED
        </Button> */}
        <Button variant='info' href='/model'>View</Button>
      </div>
    </div>
  );
}

export default Model;
