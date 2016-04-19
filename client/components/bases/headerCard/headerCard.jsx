import React, {Component} from 'react';
import {connect} from 'react-redux';

import './headerCard.less';

class HeaderCard extends Component {

  render() {
    let mainClassName = this.props.mainClassName || '';
    let headerClassName = this.props.headerClassName || '';
    let bodyClassName = this.props.bodyClassName || '';

    return (
      <div className={'headerCard ' + mainClassName}>
        <div className={'headerCard-header ' + headerClassName}>{this.props.headerContent}</div>
        <div className={'headerCard-body ' + bodyClassName}>{this.props.bodyContent}</div>
      </div>
    )
  }

};

export default HeaderCard;