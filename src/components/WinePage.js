import React, { Component } from 'react';
//import * as WinesService from '../services/Wines';
import { Wine } from './Wine';
import { Loader } from './Loader';
import { Header } from './Header';
import { connect } from 'react-redux';
import { fetchWineView } from '../actions';

export class _WinePage extends Component {
  componentDidMount() {
    this.props.fetchWineView(this.props.match.params.wineId);
  }

  render() {
    //console.log();
    if (this.props.loading) {
      return (
        <div className="center-align">
          <Loader />
        </div>
      );
    }
    return (
      <div className="container">
        <Header {...this.props} />
        <div className="row">
          <Wine wineView={this.props.wineView} />
        </div>
      </div>
    );
  }
}

export const mapFromStoreToProps = store => {
  return {
    wineView: store.wineView,
    loading: store.loading === 'HTTP_LOADING'
  };
};

export const WinePage = connect(mapFromStoreToProps, { fetchWineView })(_WinePage);
