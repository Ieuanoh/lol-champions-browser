import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';


import './App.css';
import Logo from './logo.png';

import ChampionsGrid from './Components/ChampionsGrid';
import ChampionDetail from './Components/ChampionDetail';

class App extends Component {
  state ={
    champions: [],
  }

  // set state from local storage first if it's there
  componentWillMount() {
    localStorage.getItem('champions') && this.setState({
      champions: JSON.parse(localStorage.getItem('champions')),
    });
  }

  // Only call the data if it's not stored in local storage
  async componentDidMount() {
    if (!localStorage.getItem('champions')) {
      this.fetchChamps();
    } else {
      console.log('Using Local storage data');
    }
  }

  // Save Champion data to local storage
  componentWillUpdate = (nextProps, nextState) => {
    localStorage.setItem('champions', JSON.stringify(nextState.champions));
  }

  async fetchChamps() {
    const CHAMPIONS_FETCH = '/api/champions';
    try {
      const res = await fetch(CHAMPIONS_FETCH);
      const champions = await res.json();

      this.setState({
        champions: champions.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { champions } = this.state;

    return (

      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <main>
          <Helmet>
            <meta charSet="utf-8" />
            <title>League of Legends Browser</title>
          </Helmet>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <ChampionsGrid logo={Logo} champions={champions} />}
            />
            <Route
              exact
              path="/champion/:key"
              render={({ match }) => <ChampionDetail match={match} champions={champions} />}
            />
          </Switch>

        </main>
      </Router>


    );
  }
}

export default App;

