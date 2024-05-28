import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>Events Await</h1>
        <p>Are you ready for Patras Events?</p>
        <div className="hero-btns">
            <Button 
                classNme='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
              GET STARTED
            </Button>  
        
        </div>
    </div>
  )
}

export default HeroSection
