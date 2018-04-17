import styled from 'styled-components';

export const Champion = styled.article`
    flex: auto;
    
    position:relative;
    padding:0.5rem;
    text-align:center;
    font-size: 0.8rem;
    @media (min-width:720px) {
        width: 15%;
        max-width:30%;
    }

    img {
        width:100%;
        transition:0.3s;

        :hover {
            transform: scale(1.05);
            transition:0.3s;
        }
    }

    .overlay {
        display:flex;
        align-items:center;
        justify-content:center;
        transition:0.3s;
        color:white;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-color: rgba(0,0,0,0.6);
        transition:0.3s;
        @media (min-width:720px) {
            display:none;
        }  
    }

    :hover .overlay {
        display:flex;
    }

    h2 {
        font-size:1.2rem;
        text-transform:uppercase;
        letter-spacing:.1em;
    }
`;
