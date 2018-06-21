import React from 'react';
import TeamCard from '../../components/TeamCard.js';

class Teams extends React.Component {
  constructor(props) {
    super(props);

    this.url = `https://worldcup.sfg.io/teams/results`;
    this.state = { data: [], hour: 0, colors: this.colors };
  }

  componentWillUnmount() {
    document.querySelector('.loading__wrapper').classList.remove('loaded');
  }
  componentDidMount() {
    let localslip = this;
    let data = {};

    fetch(this.url)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        data = result;

        setTimeout(function() {
          localslip.setState({ data: data });
          document.querySelector('.loading__wrapper').classList.add('loaded');
        }, 2000);
      })
      .catch(function(err) {
        document.querySelector('.loading__wrapper').classList.add('loaded');
        console.log(err);
      });
  }

  render() {
    if (this.state.data.length > 0) {
      var TeamNodes = this.state.data.map(function(team, i) {
        return (
          <TeamCard
            id={team.id}
            country={team.country}
            code={team.fifa_code}
            group_id={team.group_id}
            group_letter={team.group_letter}
            wins={team.wins}
            draws={team.draws}
            losses={team.losses}
            games_played={team.games_played}
            points={team.points}
            goals_for={team.goals_for}
            goals_against={team.goals_against}
            goal_differential={team.goals_differential}
            key={i}
          />
        );
      });
    }

    return <section className="teamList display--column">{TeamNodes}</section>;
  }
}

export default Teams;
