import React from 'react';
import MatchCard from '../../components/MatchCard.js';

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.url = `https://worldcup.sfg.io/matches/today`;
    this.state = { data: [] };
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
    if (this.state.data.length > 0) {
      var MatchNodes = this.state.data.map(function(match, i) {
        if (match.status === 'future') {
          return (
            <MatchCard
              venue={match.venue}
              location={match.location}
              status={match.status}
              time={match.time}
              fifa_id={match.fifa_id}
              home_team={match.home_team}
              away_team={match.away_team}
              datetime={match.datetime}
              winner={match.winner}
              winner_code={match.winner_code}
              format="HH:mm:ss"
            />
          );
        }
      });
    }

    return <section className="teamList display--row">{MatchNodes}</section>;
  }
}

export default Today;
