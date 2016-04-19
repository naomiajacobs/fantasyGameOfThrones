import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from './../../services/actionCreators.jsx';
// import TeamRanking from './../TeamRanking/teamRanking.jsx';
import LeagueRanking from './../LeagueRanking/leagueRanking.jsx';
import PlainCard from './../bases/plainCard/plainCard.jsx';

import './home.less';

class Home extends Component {

  advanceLeague() {
    this.props.dispatch(actions.advanceLeague(this.props.league.id, this.props.league.latestSeen));
  }

  renderNextEpisode() {
    return (<div className='advance-button' onClick={this.advanceLeague.bind(this)}>ADVANCE TO NEXT EPISODE</div>);
  }

  render() {
    return (<div className='home'>
      <div className='home-left'>
      </div>
      <div className='home-right'>
        <PlainCard bodyContent={this.renderNextEpisode()}/>
        <LeagueRanking />
      </div>
    </div>);
  }
}

const select = (state) => {

  return {
    // username: state.data.auth.self.username,
    league: state.data.league || {},
    // characters: state.data.characters || [],
    // roster: state.data.auth.self.roster || {},
  };
};

export default connect(select)(Home);
