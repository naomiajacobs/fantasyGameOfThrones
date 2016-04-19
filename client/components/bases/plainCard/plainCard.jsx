import React, {Component} from 'react';
import {connect} from 'react-redux';

import './plainCard.less';

class PlainCard extends Component {

  render() {
    return (
      <div className='plainCard'>{this.props.bodyContent}</div>
    )
  }

};

export default PlainCard;