import React, { Component } from 'react';
import * as WinesService from '../services/Wines';
import { Wine } from './Wine';
import { Loader } from './Loader';
import { Header } from './Header';

export class WinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      wine: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      WinesService.fetchWine(this.props.match.params.wineId).then(wine => {
        console.log('Checking getting WineId ', this.props.match.params.wineId);
        this.setState({
          loading: false,
          wine
        });
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='center-align'>
          <Loader />
        </div>
      );
    }
    return (
      <div className='container'>
        <Header {...this.props} />
        <div className='row'>
          <Wine wine={this.state.wine} />
        </div>
      </div>
    );
  }
}
