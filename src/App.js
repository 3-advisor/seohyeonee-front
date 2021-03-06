import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Main from './pages/Main';

import Header from './components/Header';

import style from './scss/Layout.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className={style.content}>
          <Route path="/" exact component={Main} />
        </div>
      </Router>
    );
  }
}

export default hot(App);
