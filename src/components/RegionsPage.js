import React, { Component } from 'react';
import { Regions } from './Regions';
import * as WinesService from '../services/Wines';
import { Loader } from './Loader';

export class RegionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      regions: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      WinesService.fetchRegions().then(regions => {
        this.setState({
          loading: false,
          regions
        });
      });
    });
  }

  onSelectRegion = region => {
    // testing what i get
    console.log('test ::::::::', this.props);
    this.props.history.push({
      pathname: `/regions/${region}`
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className='center-align'>
          <Loader />
        </div>
      );
    }
    return (
      <div className='row'>
        <Regions onSelectRegion={this.onSelectRegion} regions={this.state.regions} />
      </div>
    );
  }
}
