import React, {Component} from 'react';
import TeamInfo from './TeamInfo.js';
import TeamFlag from './TeamFlag.js';

class TeamCard extends Component {
    render() {
        return (
            <div className="team card card--square">
                <header className="card__header">
                    <TeamFlag code={this.props.code} size={64} />
                    <h2 className="card__title">
                        {this.props.country}<br/>
                        <span className="team__group">Groupe {this.props.group_letter}</span>
                    </h2>
                    <div className="card__points"><strong>{this.props.points}</strong><span>points</span></div>
                </header>
                {/*<TeamInfo
                country={this.props.country}
                group_id={this.props.group_id}
                group_letter={this.props.group_letter}
                wins={this.props.wins}
                draws={this.props.draws}
                losses={this.props.losses}
                games_played={this.props.games_played}
                points={this.props.points}
                goals_for={this.props.goals_for}
                goals_against={this.props.goals_against}
                goal_differential={this.props.goals_differential}
            />*/}
            </div>
        );
    }
}

export default TeamCard;
