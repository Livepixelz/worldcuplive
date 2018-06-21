import React, { Component } from 'react';

class LastInfo extends Component {
  render() {
    return (
      <div className="card__content">
        <span className="card__metas"></span>
          <table className="card__scores">
              <thead>
              <tr>
                <th>V</th>
                <th>N</th>
                <th>D</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{this.props.wins}</td>
                <td>{this.props.draws}</td>
                <td>{this.props.losses}</td>
              </tr>
              </tbody>
          </table>
      </div>
    );
  }
}

export default LastInfo;
