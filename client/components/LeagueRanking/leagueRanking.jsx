import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderCard from './../bases/headerCard/headerCard.jsx';
import TableLine from './../bases/TableLine/tableLine.jsx';

import './leagueRanking.less';

class LeagueRanking extends Component {

  renderLeagueRanking() {
    return this.props.rankedLeagueMembers.map((member, index) => {
        return <TableLine key={index} left={member.roster.points} right={member.username} />;
      });
  }

  render() {
    return (
      <HeaderCard
        mainClassName='league-ranking'
        headerClassName='league-ranking-header'
        headerContent='LEAGUE RANKING'
        bodyClassName='league-ranking-body'
        bodyContent={this.renderLeagueRanking()}
      />
    );
  }

};

const select = (state) => {
  let rankedLeagueMembers = state.data.league.users.sort((a, b) => {
    return a.roster.points < b.roster.points;
  });

  return { rankedLeagueMembers };
};

export default connect(select)(LeagueRanking);
