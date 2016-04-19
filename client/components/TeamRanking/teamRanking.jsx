import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderCard from './../bases/headerCard/headerCard.jsx';
import TableLine from './../bases/TableLine/tableLine.jsx';

import './teamRanking.less';

class TeamRanking extends Component {

  renderTeamRanking() {
    return this.props.rankedTeamMembers.map((member, index) => {
      return <TableLine key={index} left={member.points} right={member.name} />;
    });
  }

  render() {
    return (
      <HeaderCard
        mainClassName='team-ranking'
        headerClassName='team-ranking-header'
        headerContent='TEAM RANKING'
        bodyClassName='team-ranking-body'
        bodyContent={this.renderteamRanking()}
      />
    );
  }

};

const select = (state) => {
  let latestEpisode = state.data.league.latestSeen;
  let roster = state.data.auth.self.roster;
  let currentChars = roster[latestEpisode].map((char) => {
    return char[0];
  });

  let teamMembers = {};

  for (let episode in roster) {

    for (let character in episode) {
      let charId = character[0];
      if (currentChars.indexOf(charId) !== -1) {
        teamMembers[charId] = teamMembers[charId] || {
          name: state.data.characters[charId].name,
          points: 0,
        };

        teamMembers[charId].points += character[1];
      }
    }
  }

  let rankedTeamMembers = Array.from(teamMembers, (char) => [char.name, char.points]);

  rankedTeamMembers = rankedTeamMembers.sort((a, b) => {
    return a[1] < b[1];
  });

  return { rankedTeamMembers };
};

export default connect(select)(TeamRanking);
