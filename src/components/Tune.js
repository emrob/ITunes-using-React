import React from 'react';

class Tune extends React.Component {

  render(){

    return (
      <div className="tune-details">

        <h4>{this.props.title} by {this.props.artist}</h4>

      </div>
    );
  }
};

export default Tune;
