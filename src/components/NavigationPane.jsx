import React, {useEffect}  from "react";
// import { makeStyles } from "@material-ui/core/styles";
import InstagramFeed from "../containers/InstagramFeed";
// import { Grid } from "@material-ui/core";
import image1 from '../images/welcome.jpg'
import image2 from '../images/image2.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const NavigationPane = ({visible}) => {

    return(
        <NavigationWrapper isVisible={visible}>
            <NavigationPanel to='/products'>
                <NavigationText >OUR PRODUCTS</NavigationText>
            </NavigationPanel>
            <NavigationPanel to='/about'>
                <NavigationText >WHO WE ARE</NavigationText>
            </NavigationPanel>
            <ExternalNavigationPanel href='https://www.etsy.com/shop/CandlesByJared' target='_blank'>
                <NavigationText>ETSY SHOP</NavigationText>
            </ExternalNavigationPanel>
        </NavigationWrapper>
    )
}

export default NavigationPane

const NavigationPanel = styled(Link)`
    flex: 1;
    position: relative;
    font-size: 5vw;
    color: hsl(187, 5%, 60%);
    &:hover{
        color: hsl(187, 60%, 30%);
    }
`;

const ExternalNavigationPanel = styled.a`
    flex: 1;
    position: relative;
    font-size: 5vw;
    color: hsl(187, 5%, 60%);
    &:hover{
        color: hsl(187, 60%, 30%);
    }
`;

const NavigationText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1em;
    opacity: 0.75;
`;

const NavigationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    >:nth-child(3){
        background: hsl(187, 20%, 70%);
    }
    >:nth-child(2){
        background: hsl(187, 20%, 80%);
    }
    >:nth-child(1){
        background: hsl(187, 20%, 90%);
    }
`;


