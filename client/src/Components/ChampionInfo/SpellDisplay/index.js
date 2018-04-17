import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpellDisplay = ({ spell }) => {
  const spellImg = `//ddragon.leagueoflegends.com/cdn/8.7.1/img/spell/${spell.image.full}`;
  // strip html tags returned in data
  const regex = /(<([^>]+)>)/ig;
  const description = spell.description.replace(regex, '');

  return (

    <Spell>
      <img alt={spell.name} src={spellImg} />
      <div>
        <h3>{spell.name}</h3>
        <p>{description}</p>
        <b>Cost: {spell.cost.join('/')} {spell.costType} </b>
      </div>
    </Spell>
  );
};

SpellDisplay.propTypes = {

};

export default SpellDisplay;

const Spell = styled.div`
    flex: 50%;
    img {
        flex:auto;
        width:6rem;
        border-radius:50%;
        padding: 1rem 0rem;
    }
    h3 {
        margin-top:0;
        font-size:1.2rem;
        text-transform:uppercase;
        letter-spacing:.1em;
    }
    p {
        font-size: 1rem!important;
        padding-right:2rem;
    }
`;
