import React from 'react'
import './style.css';

const Square = (props) => {
    
    return (
        <>
      <span className="square" onClick={props.onClick} >{props.state}</span>
        </>
    )
}

export default Square
