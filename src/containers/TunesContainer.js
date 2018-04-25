import React from "react";
import Chart from '../components/Chart';

class TunesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tunes: []
    }
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(json => this.setState({tunes: json.feed.entry}));
  }

//   loadTunes(url) {
//   const request = new XMLHttpRequest();
//   request.open('GET', url);
//   request.onload = () => {
//     if (request.status === 200) {
//       const jsonString = request.responseText;
//       const tuneList = JSON.parse(jsonString);
//       this.setState({tunes: tuneList.feed.entry});
//     }
//   };
//   request.send();
// }
//
//
// handleSelectChange(event) {
//   this.loadTunes(event.target.value);
// }


  render(){
    return (
        <div>
        <Chart
          tunes={this.state.tunes}
          // handleSelectChange={this.handleSelectChange}
        />


      </div>
    );
  }
}

export default TunesContainer;
