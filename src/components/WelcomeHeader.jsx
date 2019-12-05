import React from "react";
import { Link } from 'react-router-dom';

import welcomeImage from '../images/welcome.jpg'
import styled from 'styled-components'

const WelcomeHeader = ({visible, goToView}) => {
    return(
        <Background>
            <Title>J&B</Title>
            <SubTitle>Simple | Modern | Handmade</SubTitle>
            <Link to='/products'>PRODUCTS</Link>
        </Background>
    )
}

export default WelcomeHeader


const Background = styled.div`
    height: 100vh;
    background: url(${welcomeImage});
    background-size: cover;
    background-position: center;
`;

const Title = styled.div`
    font-size: 10em;
    width: 100%;
    color: hsl(187, 5%, 90%);
`;

const SubTitle = styled.div`
    font-size: 3em;
    width: 100%;
    color: hsl(187, 5%, 90%);
`;
            {/* <div className={classes.root}>
                <div className={classes.title}>J&B</div>
                <div className={classes.subtitle}>Simple Modern Handmade</div>
                <div className={classes.buttonContainer}><Link to='/products' className={classes.button}> Learn More </Link></div>
            </div> */}