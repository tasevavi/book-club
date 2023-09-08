import React, { useState } from 'react'
import './Button.css'

// TODO: replace any with smth else

function Button(props: any): JSX.Element {
    const label = props.btnProps.text
    console.log(props)
    const clickHandler = () => {
        console.log('btn clicked')
    }
    return <button onClick={clickHandler}>{label}</button>
}

export default Button
