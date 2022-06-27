import React from 'react'
import "./Title.css"


const Title = (props) => {
    return (
        <div className='Title__wrapper'>
            <h1 className='Title__heading'>{props.heading}</h1>
            <div className='Title__heading--line'></div>
        </div>
    )
}

export default Title
