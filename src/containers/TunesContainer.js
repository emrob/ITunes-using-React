import React from "react";
import Heading from "../components/Heading"
import Chart from '../components/Chart';

class TunesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tunes: [],
    }
    // this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  // componentDidMount(){
  //   this.loadTunes(this.props.genres[0].url)
  // }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(json => this.setState({tunes: json.feed.entry}));
  }

  // loadTunes(url) {
  //     const request = new XMLHttpRequest();
  //     request.open('GET', url);
  //     request.onload = () => {
  //       if (request.status === 200) {
  //         const jsonString = request.responseText;
  //         const tuneList = JSON.parse(jsonString);
  //         this.setState({tunes: tuneList.feed.entry});
  //       }
  //     };
  //     request.send();
  //   }


// handleSelectChange(event) {
//   this.loadTunes(event.target.value);
// }

handlePlayPause(audio) {
  audio.paused ? audio.play() : audio.pause();
  audio.classList.toggle('playing');
}


  render(){
    return (
        <div>
        <Heading
          // handleSelectChange={this.handleSelectChange}
          // genres={this.props.genres}
         />
        <Chart
          tunes={this.state.tunes}
          // handleSelectChange={this.handleSelectChange}
          handlePlayPause={this.handlePlayPause}
        />


      </div>
    );
  }
}

export default TunesContainer;
