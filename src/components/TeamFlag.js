import React, { Component } from 'react';

class TeamFlag extends Component {
  render() {
    var flagMatch = {
      ARG: 'AR',
      AUS: 'AU',
      BEL: 'BE',
      BRA: 'BR',
      COL: 'CO',
      CRC: 'CR',
      CRO: 'HR',
      DEN: 'DK',
      EGY: 'EG',
      ENG: 'GB',
      ESP: 'ES',
      FRA: 'FR',
      GER: 'DE',
      IRN: 'IR',
      ISL: 'IS',
      ITA: 'IT',
      JPN: 'JP',
      KOR: 'KR',
      MAR: 'MA',
      MEX: 'MX',
      NGA: 'NG',
      PAN: 'PA',
      PER: 'PE',
      POL: 'PL',
      POR: 'PT',
      RUS: 'RU',
      KSA: 'SA',
      SEN: 'SN',
      SRB: 'RS',
      SUI: 'CH',
      SWE: 'SE',
      TUN: 'TN',
      URU: 'UY'
    };
    return (
      <div className="card__image">
        <img
          src={
            'http://www.countryflags.io/' +
            flagMatch[this.props.code] +
            '/flat/' +
            this.props.size +
            '.png'
          }
          alt=""
        />
      </div>
    );
  }
}

export default TeamFlag;
