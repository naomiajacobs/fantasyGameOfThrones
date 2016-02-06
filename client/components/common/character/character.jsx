import React, {Component} from 'react';
import {connect} from 'react-redux';

class Character extends Component{
  render() {
    return (
      <div className="character">
        <div className="charName">{this.props.char.name}</div>
        <img className="thumb" src={this.props.char.imageUrl}></img>
      </div>
    );
  }
};

const select = (state) => {
  return {};
};

export default connect(select)(Character);