import React from 'react';

import Progress from './progress'

function PasswordString (props) {
  return (
    <div className="column-100 mb-2">
      <h5 className="d-inline-block">Password strength:</h5>
      <span className="float-right">{props.verdict}</span>
      <Progress 
        progressColor={props.progressColor}
        progressWidth={props.progressWidth}
      />
      <small>
        New password must containt uppercase letters, lowercase letters, numbers, 
        special characters.
      </small>
    </div>
  )
}

export default PasswordString;