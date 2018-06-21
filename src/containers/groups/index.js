import React from 'react';
import TeamFlag from '../../components/TeamFlag.js';

class Groups extends React.Component {
  constructor(props) {
    super(props);

    this.url = `https://worldcup.sfg.io/teams/group_results`;
    this.state = { data: [], hour: 0, colors: this.colors };
  }

  componentWillUnmount() {
    document.querySelector('.loading__wrapper').classList.remove('loaded');
  }

  componentDidMount() {
    console.log('cdm');
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
        console.log(err);
      });
  }

  render() {
    var ladder = [];
    var group1;
    var group2;
    if (this.state.data.length > 0) {
      var TeamNodes = this.state.data.map(function(g, i) {
        var teamGroup = g.group;
        var letter = teamGroup.letter;

        var list = teamGroup.teams.map(function(t, j) {
          var team = t.team;
          console.log(team);
          return (
            <tr key={j}>
              <td>
                <TeamFlag code={team.fifa_code} size={16} />
                {team.country}
              </td>
              <td>{team.wins}</td>
              <td>{team.draws}</td>
              <td>{team.losses}</td>
              <td>{team.points}</td>
            </tr>
          );
        });

        return (
          <div className="card card--square group" key={i}>
            <header className="card__header">
              <h2 className="card__title card__title--large">
                {teamGroup.letter}
              </h2>
            </header>
            <div className="card__content">
              <table className="card__scores">
                <thead>
                  <tr>
                    <th>Equipe</th>
                    <th>V</th>
                    <th>N</th>
                    <th>D</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>{list}</tbody>
              </table>
            </div>
          </div>
        );
      });
    }
    console.log(ladder);
    return <section className="teamList display--column">{TeamNodes}</section>;
  }
}

export default Groups;
