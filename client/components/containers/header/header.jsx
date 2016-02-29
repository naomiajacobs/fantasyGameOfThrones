import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from './../../../services/actionCreators.jsx';
import classNames from 'classnames';

import './header.less';

class Header extends Component {
  renderTabs(tabs) {
    var context = this;
    return tabs.map((tab, i) => {
      var classes = classNames('clickable', 'tab', {
        currentTab: context.props.currentTab === tab,
      });
      return (
        <li key={i} 
            className={classes}
            // onClick={this.navigate.bind(this,tab)}>
            onClick={() => { this.navigate(tab); }}>
          {tab}
        </li>
      );
    });
  }

  navigate(tab) {
    switch(tab) {
      case 'LOGOUT':
        return this.props.dispatch(actions.logOut());
      case 'JOIN A LEAGUE':
        return this.props.dispatch(actions.navigateTo('JOIN_A_LEAGUE'));
      case 'ROSTERS':
        return this.props.dispatch(actions.changeRosterPlayer(this.props.rosterPlayer));
      default:
        this.props.dispatch(actions.navigateTo(tab));
    }
  }

  render() {
    return (
      <div className='header'>
        <div className='left-header'>
          <div className='logo'>
            <h1 className='logo-main'>Game of Thrones</h1>
            <h1 className='logo-sub'>Fantasy League</h1>
          </div>
          <ul className='tabs'>
            {this.renderTabs(this.props.tabs)}
          </ul>
        </div>
        <div className='right-header'>
          <div className='username'>{this.props.username.toUpperCase()}</div>
          <ul className='logout clickable tab' onClick={() => { this.navigate('LOGOUT'); }}>LOGOUT</ul>
        </div>
      </div>
    );
  }
}

const select = (state) => {
  const tabs = ['HOME', 'DRAFT', 'TRADE', 'RANKINGS', 'ROSTERS'];
  if (!state.data.inALeague) {
    tabs.push('JOIN A LEAGUE');
  } else {
    tabs.push('LEAGUE');
  }

  // if roster player has been set previously, keep same one
  // else display roster of uesr
  var rosterPlayer = Object.keys(state.ui.rosterPlayer).length === 0 ? state.data.auth.self : state.ui.rosterPlayer;

  return {
    tabs,
    username: state.data.auth.self.username,
    rosterPlayer: rosterPlayer,
    currentTab: state.ui.contentDisplay || 'HOME',
  };

}

export default connect(select)(Header);

