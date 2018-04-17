import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ChampionCard from '../ChampionCard';

export default class ChampionsGrid extends Component {
  state ={
    searchInput: '',
  }

  searchChampions = (event) => {
    this.setState({ searchInput: event.target.value.substr(0, 15) });
  }

  render() {
    const { logo } = this.props;
    const { champions } = this.props;

    // filter values for the search function
    const champIndex = Object.keys(champions);
    const filteredChamps = champIndex.filter(champion =>
      champion.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1);

    return (
      <div>
        <MainHeader><img src={logo} alt="league of legends browser" /></MainHeader>
        <SearchBox>
          <div>
            <p>Search Champions by Name: </p><input type="text" value={this.state.search} onChange={this.searchChampions} />
          </div>
        </SearchBox>
        <GridDisplay id="champions-grid">
          {filteredChamps.map(champion =>
            <ChampionCard key={champion} champion={champions[champion]} />)}
        </GridDisplay>
      </div>
    );
  }
}

ChampionsGrid.propTypes = {
  logo: PropTypes.string.isRequired,
  champions: PropTypes.shape({
  }).isRequired,
};

const MainHeader = styled.h1`
  text-align:center;
  margin-top:4.5rem;
  img {
    max-width:20rem;
  }
`;

const SearchBox = styled.div`
  max-width:80rem;
  margin:auto;
  text-align:center;

  >div {
    display:flex;
    justify-content:center;
  }

  p {
    font-size:1rem;
    text-transform: uppercase;
    letter-spacing:.1em;
  }

  input {
    background-color:transparent;
    border-radius:5px;
    border:2px gold solid;
    color: white;
    padding:0rem 1rem;
    margin-left:1rem;
  }
`;

const GridDisplay = styled.section`
  justify-items: between;
  max-width:80rem;
  margin: 0 auto;
  padding:2rem;

  @media (min-width:720px) {
    padding: 3rem 5rem;
    flex-wrap: wrap;
    display: flex;
  }

  
`;

