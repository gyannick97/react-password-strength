import React from 'react';

function Progress (props) {
  return (
    <div className="progress">
      <div className={'progress-bar ' + props.progressColor} style={{width: props.progressWidth}}></div>
    </div>
  )
}

export default Progress;