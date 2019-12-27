import React, { Component } from 'react';
import { Regions } from './Regions';
//import * as WinesService from '../services/Wines';
import { Loader } from './Loader';
import { connect } from 'react-redux';
import { fetchRegions } from '../actions';

export class _RegionsPage extends Component {
  componentDidMount() {
    this.props.fetchRegions();
  }

  onSelectRegion = region => {
    // testing what i get
    console.log('test ::::::::', this.props);
    this.props.history.push({
      pathname: `/regions/${region}`
    });
  };

  render() {
    console.log('=>>>>>>>>>>>', this.props.routing);
    if (this.props.loading) {
      return (
        <div className="center-align">
          <Loader />
        </div>
      );
    }
    return (
      <div className="row">
        <Regions onSelectRegion={this.onSelectRegion} regions={this.props.regions} />
      </div>
    );
  }
}

//console.log(store.loading === 'HTTP_LOADING');

function mapFromStoreToProps(store) {
  return {
    regions: store.regions,
    loading: store.loading === 'HTTP_LOADING'
  };
}

export const RegionsPage = connect(mapFromStoreToProps, { fetchRegions })(_RegionsPage);
