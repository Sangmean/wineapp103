import React, { Component } from 'react';
import * as WinesService from '../services/Wines';
import { WineList } from './WineList';
import { Loader } from './Loader';
import { Header } from './Header';

export class WineListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      wines: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      WinesService.fetchWinesFrom(this.props.match.params.regionId).then(wines => {
        console.log('Am I getting correct regionId :::::::::', this.props.match.params.regionId);
        this.setState({
          loading: false,
          wines
        });
      });
    });
  }

  onSelectWine = wine => {
    this.props.history.push({
      pathname: `/regions/${this.props.match.params.regionId}/wines/${wine}`
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
      <div className='container'>
        <Header {...this.props} />

        <div className='row'>
          <WineList onSelectWine={this.onSelectWine} wines={this.state.wines} />
        </div>
      </div>
    );
  }
}
