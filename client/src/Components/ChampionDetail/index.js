import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ChampionHeader from '../ChampionHeader';
import ChampionInfo from '../ChampionInfo';

export default class ChampionDetail extends Component {
  componentWillMount() {
    // Scroll to top on item page load
    window.scrollTo(0, 0);
  }

  render() {
    const index = this.props.match.params.key;
    const champion = this.props.champions[index];
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{champion.name} - {champion.title}</title>
        </Helmet>
        <ChampionHeader champion={champion} />
        <ChampionInfo champion={champion} />
        <div />
      </div>
    );
  }
}

ChampionDetail.propTypes = {
  champions: PropTypes.shape.isRequired,
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

