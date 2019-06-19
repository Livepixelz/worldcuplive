import React, { Component } from 'react';

class TeamFlag extends Component {
  render() {
    var flagMatch = {
      ARG: 'AR',
      AUS: 'AU',
      BEL: 'BE',
      BRA: 'BR',
      CAN: 'CA',
      CMR: 'CM',
      CHN: 'CN',
      CHI: 'CL',
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
      JAM: 'JM',
      JPN: 'JP',
      KOR: 'KR',
      MAR: 'MA',
      MEX: 'MX',
      NED: 'NL',
      NGA: 'NG',
      NOR: 'NO',
      NZL: 'NZ',
      PAN: 'PA',
      PER: 'PE',
      POL: 'PL',
      POR: 'PT',
      RSA: 'ZA',
      RUS: 'RU',
      KSA: 'SA',
      SCO: 'GB',
      SEN: 'SN',
      SRB: 'RS',
      SUI: 'CH',
      SWE: 'SE',
      THA: 'TH',
      TUN: 'TN',
      URU: 'UY',
      USA: 'US'
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
