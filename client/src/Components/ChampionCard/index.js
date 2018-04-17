import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';

import { Champion } from './styles';

// Docs out of date with CDN version (some images were missing) - this seems to be the latest
const imgPrefix = '//ddragon.leagueoflegends.com/cdn/8.7.1/img/champion/';

const ChampionCard = ({ champion }) => (
  <Champion>
    <LazyLoad>
      <img src={`${imgPrefix}${champion.image.full}`} alt={champion.name} />
    </LazyLoad>
    <Link to={`/champion/${champion.key}`}>
      <div className="overlay">
        <div>
          <h2>{champion.name}</h2>
          <p>{champion.title}</p>
        </div>
      </div>
    </Link>
  </Champion>
);

export default ChampionCard;

ChampionCard.propTypes = {
  champion: PropTypes.shape({
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
};

