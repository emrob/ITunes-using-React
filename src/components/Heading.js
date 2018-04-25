import React from 'react';

const Heading = (props) =>{
  return (
    <div>
      <h1>Top 20 Tunes 2018</h1>
    {/* <select onChange={props.handleSelectChange}>
      {props.genres.map(genre => {
          return <option key={genre.name} value={genre.url}>{genre.name}</option>
        })}

    </select> */}
    </div>
  );
};


export default Heading;
