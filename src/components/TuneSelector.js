import React from "react";


const TuneSelector = (props) => {
  // let itunes = Object.entries(tunes);
  const options = json.feed.entry[tunes]((tune, index) => {
    return <option value={index} key={index}>{tune.title}</option>
  });


  const handleChange = (event) => {
    let index = event.target.value;
    props.onTuneSelected(index);
  }

  return (
    <select
      onChange={handleChange}
      id="tune-selector" defaultValue="default">
        <option disabled value ="default">Make a Selection...</option>
        {options}
      </select>
  )
}

export default TuneSelector;
