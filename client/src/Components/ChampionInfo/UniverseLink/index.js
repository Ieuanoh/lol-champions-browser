import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UniverseLink = ({ champion }) => {
  const universeLink = `https://universe.leagueoflegends.com/en_US/champion/${champion.key}`;
  return (
    <a style={{ textDecoration: 'none' }} href={universeLink}>
      <MoreButton>
        View On Universe
      </MoreButton>
    </a>
  );
};

UniverseLink.propTypes = {
  champion: PropTypes.shape.isRequired,
};

export default UniverseLink;

const MoreButton = styled.div`
    width:100%;
    padding:2rem 0rem;
    background-color:gold;
    text-align:center;
    color:black;
    text-transform:uppercase;
    letter-spacing:.1em;
    text-decoration:none;
    font-size:1.5rem;
    font-weight:600;
    }
`;

