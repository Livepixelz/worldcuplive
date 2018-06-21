import React, {Component} from 'react';
import TeamInfo from './TeamInfo.js';
import TeamFlag from './TeamFlag.js';

class MatchCard extends Component {
    render() {
        return (
            <div className="card card--square match">
                <header className="card__header">
                    <div className="match__item">
                        <TeamFlag code={this.props.home_team.code} size={64}/>
                        <h2 className="card__title card__title--small">
                            {this.props.home_team.country}
                        </h2>
                    </div>
                    <div className="match__item match__score">
                        {this.props.home_team.goals}
                        -
                        {this.props.away_team.goals}
                    </div>
                    <div className="match__item">
                        <TeamFlag code={this.props.away_team.code} size={64} />
                        <h2 className="card__title card__title--small">
                            {this.props.away_team.country}
                        </h2>
                    </div>
                </header>
            </div>
        );
    }
}

export default MatchCard;
