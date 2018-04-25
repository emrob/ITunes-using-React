import React, { Component } from 'react';
import TunesContainer from './containers/TunesContainer';
import './App.css';

class App extends Component {
  render(){
    // const allTunes = [{name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"}]

    return (
    // <TunesContainer allTunes={allTunes} />
      <TunesContainer />
    );
  }
}

export default App;
