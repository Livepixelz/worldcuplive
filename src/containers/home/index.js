import React from 'react';
import MatchCard from '../../components/MatchCard.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.url = `https://worldcup.sfg.io/matches?by_date=DESC`;
    this.state = { data: [], error: '' };
    console.log('HELLO');
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
        console.log(data);
        localslip.setState({ data: data });
        document.querySelector('.loading__wrapper').classList.add('loaded');
      })
      .catch(function(err) {
        localslip.setState({
          error: 'Trop de requêtes 👇 ! Calme la gâ️chette ⌛'
        });
        document.querySelector('.loading__wrapper').classList.add('loaded');
        console.log(err);
      });
  }

  renderList() {
    return this.state.data.map(function(match, i) {
      if (match.status !== 'future') {
        return <MatchCard match={match} format="YYYY/MM/DD" key={i} />;
      }
    });
  }

  render() {
    return (
      <section className="teamList display--row">{this.renderList()}</section>
    );
  }
}

export default Home;
