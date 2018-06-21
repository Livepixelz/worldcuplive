import React, { Component } from 'react';

class TeamFlag extends Component {
  render() {
    return (
        <div className="card__image">
          <img src={ 'http://www.countryflags.io/' + this.props.code.substr(0,2) +'/flat/' + this.props.size + '.png'} alt=""/>
        </div>
    );
  }
}

export default TeamFlag;
