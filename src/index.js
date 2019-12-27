import 'es6-shim'; // yeah, polyfill all the things !!!
import 'whatwg-fetch'; // yeah, polyfill all the things !!!
import Symbol from 'es-symbol';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { WineApp, WineListPage, WinePage, NotFound } from './components';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';

if (!window.Symbol) {
  window.Symbol = Symbol; // yeah, polyfill all the things !!!
}

const store = createStore(reducer, applyMiddleware(thunk));

export class RoutedApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={WineApp} />
            <Route path="/regions/:regionId" exact component={WineListPage} />
            <Route path="/regions/:regionId/wines/:wineId" exact component={WinePage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<RoutedApp />, document.getElementById('root'));
