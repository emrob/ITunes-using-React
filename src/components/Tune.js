import React from 'react';

class Tune extends React.Component {

  render(){

    return (
      <div className="tune-details">
        <ul>
        <li><strong>{this.props.title}</strong> by {this.props.artist}</li>
        <img src= {this.props.image} />
        </ul>

      </div>
    );
  }
};

export default Tune;
