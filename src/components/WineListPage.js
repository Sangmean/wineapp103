import React, { Component } from 'react';
//import * as WinesService from '../services/Wines';
import { WineList } from './WineList';
import { Loader } from './Loader';
import { Header } from './Header';
import { connect } from 'react-redux';
import { fetchWineList } from '../actions';

export class _WineListPage extends Component {
  componentDidMount() {
    this.props.fetchWineList(this.props.match.params.regionId);
  }

  onSelectWine = wine => {
    this.props.history.push({
      pathname: `/regions/${this.props.match.params.regionId}/wines/${wine}`
    });
  };

  render() {
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
          <WineList onSelectWine={this.onSelectWine} wines={this.props.wines} rr={{}} />
        </div>
      </div>
    );
  }
}

function mapFromStoreToProps(store) {
  return {
    wines: store.wines,
    loading: store.loading === 'HTTP_LOADING'
  };
}

export const WineListPage = connect(mapFromStoreToProps, { fetchWineList })(_WineListPage);
