import React from 'react';

function Button (props) {
  return (
    <button
      className={props.className}
      disabled={props.disabled}
      type={props.type}
    >
      { 
        props.isLoading ?
        <span className="loader"></span> 
        : null
      }
      {props.children}
    </button>
  )
}

export default Button;