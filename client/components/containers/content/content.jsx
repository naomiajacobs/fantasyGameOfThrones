import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Home from './../Home/home.jsx';
// import Trade from './../Trade/trade.jsx';
// import Draft from './../Draft/draft.jsx';
// import JoinLeague from './../JoinLeague/joinLeague.jsx';
// import Rosters from './../Rosters/rosters.jsx';
// import League from './../League/league.jsx';

import './content.less';

class Content extends Component {

  renderMain() {
    switch(this.props.contentDisplay) {
      case 'HOME':
        // return <Home/>;
      case 'TRADE':
        // return <Trade/>;
      case 'DRAFT':
        // return <Draft/>;
      case 'JOIN_A_LEAGUE':
        // return <JoinLeague />;
      case 'LEAGUE':
        // return <League />;
      case 'ROSTERS':
        // return <Rosters rosterPlayer={this.props.rosterPlayer}/>;
      default:
        // return <Home/>;
        return;
    }
  }

  render() {
    return (
      <div className="content">
        {this.renderMain()}
      </div> 
    );
  }

};

const select = (state) => {
  return {
    contentDisplay: state.ui.contentDisplay,
    rosterPlayer: state.ui.rosterPlayer,
  };
};

export default connect(select)(Content);
