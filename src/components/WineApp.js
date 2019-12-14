import React, { Component } from 'react';
import { RegionsPage } from './RegionsPage';
import { Header } from './Header';

export class WineApp extends Component {
  render() {
    return (
      <div className='container'>
        <Header {...this.props} />
        <div className='row'>
          <RegionsPage {...this.props} />
        </div>
      </div>
    );
  }
}
