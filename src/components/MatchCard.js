import React, { Component } from 'react';
import TeamFlag from './TeamFlag.js';
import Moment from 'react-moment';
import 'moment-timezone';

class MatchCard extends Component {
  render() {
    if (this.props.live && this.props.live === 'true') {
      return (
        <div className="card card--square match">
          <header className="card__header">
            <div className="match__item">
              <TeamFlag code={this.props.match.home_team.code} size={64} />
              <h2 className="card__title card__title--small">
                {this.props.match.home_team.country}
              </h2>
            </div>
            <div className="match__item match__score match__score--large">
              <div>
                <h1 className="match__time">{this.props.match.time}</h1>
              </div>
              <div className="score--large">
                {this.props.match.home_team.goals}
                -
                {this.props.match.away_team.goals}
              </div>
            </div>
            <div className="match__item">
              <TeamFlag code={this.props.match.away_team.code} size={64} />
              <h2 className="card__title card__title--small">
                {this.props.match.away_team.country}
              </h2>
            </div>
          </header>
          <div className="card__content">
            <h5 className="match__venue">{this.props.match.venue}</h5>
            <h3 className="match__location">{this.props.match.location}</h3>

            <Moment
              className="match__datetime"
              format={this.props.format}
              date={this.props.match.datetime}
            />
            <br />
            <table className="card__scores card__scores--stats">
              <tbody>
                <tr>
                  <td>
                    {this.props.match.home_team_statistics.attempts_on_goal}
                  </td>
                  <th>Tirs</th>
                  <td>
                    {this.props.match.away_team_statistics.attempts_on_goal}
                  </td>
                </tr>
                <tr>
                  <td>{this.props.match.home_team_statistics.on_target}</td>
                  <th>Cadrés</th>
                  <td>{this.props.match.away_team_statistics.on_target}</td>
                </tr>
                <tr>
                  <td>
                    {this.props.match.home_team_statistics.ball_possession}
                  </td>
                  <th>Possession</th>
                  <td>
                    {this.props.match.away_team_statistics.ball_possession}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card card--square match">
          <header className="card__header">
            <div className="match__item">
              <TeamFlag code={this.props.match.home_team.code} size={64} />
              <h2 className="card__title card__title--small">
                {this.props.match.home_team.country}
              </h2>
            </div>
            <div className="match__item match__score">
              {this.props.match.home_team.goals}
              -
              {this.props.match.away_team.goals}
            </div>
            <div className="match__item">
              <TeamFlag code={this.props.match.away_team.code} size={64} />
              <h2 className="card__title card__title--small">
                {this.props.match.away_team.country}
              </h2>
            </div>
          </header>
          <div className="card__content">
            <h5 className="match__venue">{this.props.match.venue}</h5>
            <h3 className="match__location">{this.props.match.location}</h3>
            <Moment
              className="match__datetime"
              format={this.props.format}
              date={this.props.match.datetime}
            />
          </div>
        </div>
      );
    }
  }
}

export default MatchCard;
