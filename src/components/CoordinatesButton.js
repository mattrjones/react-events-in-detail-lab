// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default function CoordinatesButton(props){
    
    const handleClick = (event) => {
        props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    return(
        <button onClick={handleClick}>Coordinates</button>
    )
}
