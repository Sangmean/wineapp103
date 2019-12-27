import React, { Component } from 'react';

export class WineList extends Component {
  onSelectWine = (e, wineId) => {
    e.preventDefault();
    this.props.onSelectWine(wineId);
  };

  render() {
    if (this.props.region === null) {
      return null;
    }
    return (
      <div className="col s12 m6 l4 offset-m3 offset-l4">
        <h2 className="center-align">Wines</h2>
        <div className="collection">
          {this.props.wines.map(t => (
            <a
              key={t.id}
              href="#!"
              onClick={e => this.onSelectWine(e, t.id)}
              className={['collection-item', t.id === this.props.rr.id ? 'active' : ''].join(' ')}
            >
              {t.name}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
