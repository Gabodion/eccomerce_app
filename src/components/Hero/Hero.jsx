
import React from 'react';
import {Button, Container} from "react-bootstrap"
import "./Hero.css"

const Hero = () => {
    return (
    
        <div className='Hero__wrapper'>
        
            <div className='Hero__content'>
                <h1 className='Hero__heading'><span className='Hero__heading--red'>Sale 20% Off</span> <br/>
                    On Everything
                    </h1>
                    <p className='Hero__para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <Button variant='danger' size="lg">Shop Now</Button>
            </div>
            
        </div>
        
    )
}

export default Hero
