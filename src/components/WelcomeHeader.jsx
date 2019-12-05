import React, { useEffect }  from "react";
import { Link } from 'react-router-dom';

import welcomeImage from '../images/welcome.jpg'
import styled,  { keyframes } from 'styled-components'

const WelcomeHeader = ({visible, goToView}) => {

    return(
        <Background isVisible={visible}>
            <Title>J&B</Title>
            <SubTitle delay={0}>Simple</SubTitle>
            <SubTitle delay={0}> | </SubTitle>
            <SubTitle delay={0}>Modern</SubTitle>
            <SubTitle delay={0}> | </SubTitle>
            <SubTitle delay={0}>Handmade</SubTitle>
            {/* <Link to='/products'>PRODUCTS</Link> */}
        </Background>
    )
}

export default WelcomeHeader


const Background = styled.div`
    > :nth-child(2) {
            animation-delay: 1s;
    }

    > :nth-child(4) {
        animation-delay: 2s;
    }

    > :nth-child(6) {
        animation-delay: 3s;
    }
    transition: height 1s ease-in
    height: ${props => props.isVisible ? '100vh' : '0vh'};
    background: url(${welcomeImage});
    background-size: cover;
    background-position: center;
`;

const Title = styled.div`
    font-size: 10em;
    width: 100%;
    color: hsl(187, 5%, 90%);
`;

const fadeInOpacity = keyframes`
  0% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const SubTitle = styled.div`
    opacity: 0;
    display: inline;
    animation-name: ${fadeInOpacity};
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    font-size: 3em;
    width: 100%;
    color: hsl(187, 5%, 90%);
    transition
`;

