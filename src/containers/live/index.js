import React from 'react';
import MatchCard from '../../components/MatchCard.js';

class Live extends React.Component {
  constructor(props) {
    super(props);
    this.url = `https://worldcup.sfg.io/matches/current`;
    this.state = { data: [] };
  }

  componentWillUnmount() {
    document.querySelector('.loading__wrapper').classList.remove('loaded');
  }

  componentDidMount() {
    let localslip = this;
    let data = {};
    localslip.interval = setInterval(() => {
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
    }, 10000);
  }

  render() {
    if (this.state.data.length > 0) {
      var MatchNodes = this.state.data.map(function(match, i) {
        return (
          <MatchCard
            venue={match.venue}
            location={match.location}
            status={match.status}
            time={match.time}
            fifa_id={match.fifa_id}
            home_team={match.home_team}
            home_team_statistics={match.home_team_statistics}
            away_team={match.away_team}
            away_team_statistics={match.away_team_statistics}
            datetime={match.datetime}
            winner={match.winner}
            winner_code={match.winner_code}
            format="YYYY/MM/DD"
            live="true"
            key={i}
          />
        );
      });
      return <section className="teamList display--row">{MatchNodes}</section>;
    } else {
      return (
        <section className="teamList display--row one-card">
          <div className="team card card--square">
            <header className="card__header">
              <h2 className="card__title">Pas de match en ce moment</h2>
            </header>
          </div>
        </section>
      );
    }
  }
}

export default Live;
