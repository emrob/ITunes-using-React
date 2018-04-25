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
          src= 'https://t3.ftcdn.net/jpg/00/31/52/04/240_F_31520498_c7779FPzqOqhHOjKLVmxewKiVQv0dbU5.jpg'
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
