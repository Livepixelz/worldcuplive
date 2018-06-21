import React, { Component } from 'react';
import TeamFlag from './TeamFlag.js';

class TeamCard extends Component {
  render() {
    return (
      <div className="team card card--square">
        <header className="card__header">
          <TeamFlag code={this.props.code} size={64} />
          <h2 className="card__title">
            {this.props.country}
            <br />
            <span className="team__group">
              Groupe {this.props.group_letter}
            </span>
          </h2>
          <div className="card__points">
            <strong>{this.props.points}</strong>
            <span>points</span>
          </div>
        </header>
      </div>
    );
  }
}

export default TeamCard;
