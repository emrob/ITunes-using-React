import React from 'react';

class Tune extends React.Component {

  render(){

    return (
      <div className="play">

        <div className="tune-details">
          <h2>{this.props.position}.</h2>
          <img src= {this.props.image} onClick={() => {this.props.handlePlayPause(this.audio)}} />
          <br></br>
          <strong>"{this.props.title}"</strong> by {this.props.artist}
          <br></br>
        </div>

        <img
          id={this.props.position}
          alt="click to play"
          className='audio-control'
          src= 'https://image.freepik.com/free-icon/play-button_318-42541.jpg height: 40px, width: 40px'
          onClick={() => {this.props.handlePlayPause(this.audio)}}
        />



        <audio
          ref={(audio) => this.audio = audio}
          id={'audio' + this.props.position}
          src={this.props.audio}  />

        </div>

      );
    }
  };

  export default Tune;
