import React, {Component} from 'react';
import {connect} from 'react-redux';

import './headerCard.less';

class HeaderCard extends Component {

  render() {
    return (
      <div className='headerCard'>
        <div className='headerCard-header'>{this.props.headerContent}</div>
        <div className='headerCard-body'>{this.props.bodyContent}</div>
      </div>
    )
  }

};

export default HeaderCard;