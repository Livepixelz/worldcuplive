import React from 'react';
import MatchCard from '../../components/MatchCard.js';

class Live extends React.Component {
  constructor(props) {
    super(props);
    this.url = `https://worldcup.sfg.io/matches/current`;
    this.state = { data: [], error: '' };
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
          localslip.setState({
            error: 'Trop de requêtes 👇 ! Calme la gâ️chette ⌛'
          });
          document.querySelector('.loading__wrapper').classList.add('loaded');
          console.log(err);
        });
    }, 10000);
  }

  render() {
    if (this.state.data.length > 0) {
      var MatchNodes = this.state.data.map(function(match, i) {
        return (
          <MatchCard match={match} format="YYYY/MM/DD" live="true" key={i} />
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
