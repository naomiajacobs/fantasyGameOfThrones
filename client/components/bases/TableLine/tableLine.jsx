import React, {Component} from 'react';

import './tableLine.less';

class TableLine extends Component {

  clickHandler() {
    if (this.props.clickHandler) { return this.props.clickHandler(); }
    return;
  }

  render() {
    return (
      <div className='table-line' onClick={() => {this.clickHandler()}}>
        <div className='table-line-left'>{this.props.left}</div>
        <div className='table-line-right'>{this.props.right}</div>
      </div>
    );
  }

};

export default TableLine;
