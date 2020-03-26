import React, { Component } from "react";
import axios from "axios";

class Places extends Component {
  render() {
    console.log(this.props.val);
    return (
      <div>
        <img src={this.props.val.img} alt="image" />
        <h2>{this.props.val.name}</h2>
        <p>{this.props.val.album}</p>
        <p>{this.props.val.song}</p>
        <p>{this.props.val.venue}</p>
      </div>
    );
  }
}

export default Places;
