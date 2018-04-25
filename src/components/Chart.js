import React from 'react';
import Tune from './Tune';

const Chart = (props) => {
  if (props.tunes == null || props.tunes.length === 0) {
    return <p>Please wait....</p>;
  }

return (
  <div>
    {props.tunes.map((tune, index) => {
      return (
        <Tune
          key={index}
          position={index + 1}
          title={tune['im:name'].label}
          artist={tune['im:artist'].label}
        />
      )

    })}
  </div>
);
};

export default Chart;