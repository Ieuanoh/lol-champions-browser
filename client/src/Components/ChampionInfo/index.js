import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StatDisplay from './StatDisplay';
import SpellDisplay from './SpellDisplay';
import UniverseLink from './UniverseLink';

const ChampionInfo = ({ champion }) => (
  <div>
    <StatContainer>
      <div>
        <div className="stat-bar">
          {Object.keys(champion.info).map(key => <StatDisplay statType={key} value={champion.info[key]} />)}
        </div>
      </div>
    </StatContainer>

    <ChampionInfoContainer>
      <h2>Lore</h2>
      <p>{champion.lore}</p>
      <h2>Spells</h2>
      <SpellWrapper>
        {champion.spells.map(spell => <SpellDisplay spell={spell} />)}
      </SpellWrapper>
    </ChampionInfoContainer>

    <UniverseLink champion={champion} />

  </div>

);

ChampionInfo.propTypes = {
  champion: PropTypes.shape.isRequired,
};

export default ChampionInfo;

const ChampionInfoContainer = styled.section`
    max-width:50rem;
    margin:0 auto;
    padding: 3rem;
    @media (min-width:720px) {
      padding:5rem;
    }

    h2 {
        font-size:3rem;
    }

    p {
        font-size:1.4rem;
        line-height:1.5;
    }

`;

const StatContainer = styled.aside`
   
    h3 {
        margin-top:0;
        margin-bottom:0;
        text-transform:uppercase;
        letter-spacing: .1em;
        font-size:.5rem;
        @media(min-width:720px) {
          padding-right:2rem;
        }
    }

    .stat-bar {
        @media (min-width:720px) {
          display: flex;
          width: 100%;
        }
        text-align:center;
        justify-content: center;
        margin: 0;
        padding:2rem;
        background-color: #111111;
    }
}
`;

const SpellWrapper = styled.div`
    @media(min-width:720px) {
      display:flex;
      flex-wrap:wrap;
    }
`;
