import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class ChampionHeader extends Component {
    state ={
      skinIndex: 0,
      nextSkin: 1,
    }

    componentWillUpdate() {

    }

    render() {
      const skins = this.props.champion.skins;
      const skinCycle = () => {
        // cycle through the array with a modulus
        const { skinIndex } = this.state;
        const { nextSkin } = this.state;
        this.setState({
          skinIndex: (skinIndex + 1) % (skins.length),
          nextSkin: (nextSkin + 1) % (skins.length),
        });
      };

      const skinUrl = `//ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.props.champion.key}_${this.state.skinIndex}.jpg`;
      const nextSkinUrl = `//ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.props.champion.key}_${this.state.nextSkin}.jpg`;

      const champion = this.props.champion;
      const tags = champion.tags.join(' | ');

      return (
        <HeaderStyled bgimage={skinUrl} lookaheadBg={nextSkinUrl}>
          <Link className="back-btn" to="/">Back</Link>
          <article>
            <h1>{champion.name}</h1>
            <p>{champion.title}</p>
            <hr />
            <small>{tags}</small>
            <nav>
              <div onClick={() => skinCycle()} />
            </nav>
          </article>
        </HeaderStyled>

      );
    }
}

export default ChampionHeader;

const HeaderStyled = styled.header`
    display:flex;
    align-items: center;
    justify-items:center;
    text-align:center;
    background-image:url(${props => props.bgimage});
    background-size:cover;
    position:relative;
    transition: all 2.5s;
    @media (min-width:720) {

    }

    > article {
        background-color: rgba(0,0,0,0.3);
        height:100%;
        width:100%;
        padding:8rem 2rem;
        @media (min-width:720px) {
            padding: 10rem;
        }
        > div {
            max-width:40rem;
            margin:0 auto;
        }
    }

    small {
        font-size:.8rem;
        font-weight:600;
        text-transform:uppercase;
        letter-spacing:.1em;
        margin-top:2rem;
    }

    .back-btn {
        position:absolute;
        padding:.6rem 2rem;
        font-size:1rem;
        color:white;
        font-weight:600;
        text-decoration:none;
        text-transform:uppercase;
        letter-spacing:.1em;
        border: 2px solid white;
        top:4%;
        left:2%;
        :hover {
            background-color:white;
            color:black;
        }
    }

    hr {
        height:.5rem;
        color:gold;
        background-color: gold;
        max-width:20rem;
        margin-bottom:2rem;
    }

    h1 {
        color:gold;
        font-size:2.8rem;
        margin-bottom:0rem;
        text-transform:uppercase;
        letter-spacing:.1em;
        @media (min-width:720px) {
            font-size:4rem;
        }
    }

    p {
        font-size:1.8rem;
        line-height:1.1;
        margin-top:.4rem;
        margin-bottom:1rem;
        text-transform:capitalize;
        font-style:italic;
        font-family: georgia;
    }

    nav {
        @media(max-width:720px) {
            display:none;
        }
        position:absolute;
        bottom:2rem;
        right:2rem;
        display:flex;
        align-items:center;
        >div {
            height: 100px;
            width:100px;
            background-image: url(${props => props.lookaheadBg});
            background-size:cover;
            margin-left:.2rem;
            border-radius:100%;
            transition:0.4s;
            box-shadow: 0px 0px 50px rgba(245, 245, 26, 0.85);
            :hover{
                transform:scale(1.1);
                transition:0.4s;
                box-shadow: 0px 0px 65px rgba(245,245,160,0.3);
            }
        }
    }
`;
