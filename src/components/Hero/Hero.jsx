
import React from 'react';
import {Button, Container} from "react-bootstrap"
import { slider } from '../../assets';
import "./Hero.css"

const Hero = () => {
    return (
    
        <div className='Hero__wrapper'>
        

        
            <div className='Hero__content position-relative row'>
                <div className='col-lg-7 col-md-6 z-index-1'>
                <h1 className='Hero__heading mb-2'><span className='Hero__heading--red'>Sale 20% Off</span> <br/>
                    On Everything
                    </h1>
                    <p className='Hero__para  mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <Button variant='danger' size="lg">Shop Now</Button>
                </div>
                <img src={slider} width="100%" className='position-absolute top-0 left-0 z-index-n2 Hero__img'/>
            </div>
            
        </div>
        
    )
}

export default Hero
