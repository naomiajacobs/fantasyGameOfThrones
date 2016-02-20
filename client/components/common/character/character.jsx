import React, {Component} from 'react';
import {connect} from 'react-redux';

import './character.less';

class Character extends Component{
  render() {
    return (
      <div className="got__character">
        <div className="char_name">{this.props.char.name}</div>
        <img className="thumb" src={this.props.char.imageUrl}></img>
      </div>
    );
  }
};

const select = (state) => {
  return {};
};

export default connect(select)(Character);