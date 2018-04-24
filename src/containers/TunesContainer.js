import React from "react";
import TuneSelector from '../components/TuneSelector';

class TunesContainer extends React.Component {
  constructor(props){
    super(props);
    this.handleTuneSelected = this.handleTuneSelected.bind(this);
    this.state = {
      tunes: {},
      currentTune: null
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(json => this.setState({tunes: json}));
  }

  handleTuneSelected(index){
    const selectedTune = this.state.tunes[index];
    this.setState({currentTune: selectedTune});
  }

  render(){
    return (
        <React.Fragment>
        <h2>Itunes Container</h2>
        <TuneSelector tunes ={this.state.tunes}
          onTuneSelected={this.handleTuneSelected}
        />

      </React.Fragment>
    );
  }
}

export default TunesContainer;
