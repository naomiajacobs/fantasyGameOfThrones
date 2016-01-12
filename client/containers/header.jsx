import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../services/actionCreators.jsx';

class Header extends Component {

  renderTabs(tabs) {
    return tabs.map((tab, i) => {
      return (
        <li key={i} 
            className="clickable"
            onClick={this.navigate.bind(this,tab)}>
          {tab}
        </li>
      );
    });
  }

  navigate(tab) {
    if(tab === 'LOGOUT'){
      return this.props.dispatch(actions.logOut());
    }
    if (tab === 'NEW LEAGUE') {
      return this.props.dispatch(actions.navigateTo('NEW_LEAGUE'));
    }
    this.props.dispatch(actions.navigateTo(tab));
  }

  render() {
    const tabs = ['HOME', 'DRAFT', 'TRADE', 'RANKINGS', 'ROSTERS', 'NEW LEAGUE'];
    return (
      <div id="header">
        <div className="leftHeader">
          <h1>FGOT</h1>
          <ul className="leftNavTabs">
            {this.renderTabs(tabs)}
          </ul>
        </div>
        <div className="RightHeader">
          <ul>
            {this.renderTabs(['LOGOUT'])}
          </ul>
        </div>
      </div>
    );
  }

};

const select = (state) => {
  return {
  };
};

export default connect(select)(Header);



