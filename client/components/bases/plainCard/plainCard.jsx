import React, {Component} from 'react';
import {connect} from 'react-redux';

import './plainCard.less';

class PlainCard extends Component {

  render() {
    return (
      <div className='plainCard'>
        <div className='plainCard-body'>{this.props.bodyContent}</div>
      </div>
    )
  }

};

export default PlainCard;