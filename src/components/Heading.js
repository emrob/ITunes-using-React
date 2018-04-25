import React from 'react';

const Heading = (props) =>{
  return (
    <div>
      <h1>UK's Top 20 Tunes</h1>
    {/* <select onChange={props.handleSelectChange}>
      {props.genres.map(genre => {
          return <option key={genre.name} value={genre.url}>{genre.name}</option>
        })}

    </select> */}
    </div>
  );
};


export default Heading;
