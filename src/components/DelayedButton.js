// Code DelayedButton Component Here
import React, {Component} from 'react'

export default function DelayedButton(props){

    const handleClick = (event) => {
        event.persist()
        window.setTimeout(() => {
            props.onDelayedClick(event);
        }, props.delay)

    }

    return(
        <button onClick={handleClick}>Delayed Button</button>
    )

}