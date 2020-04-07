import React from 'react';

function Alert (props) {
  return (
    <div className={'alert ' + props.alertType}>
      {props.children}
    </div>
  )
}

export default Alert;