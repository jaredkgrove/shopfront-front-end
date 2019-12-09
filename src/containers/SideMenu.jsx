import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import instagramLogo from '../images/instagram_logo.png'
import InstagramFeed from "../containers/InstagramFeed";

const SideMenu = ( {listings} ) => {
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [feedVisible, setGeedVisible] = React.useState(false);
    
    const handleHamburgerClick = () => {
        setMenuVisible(!menuVisible)
        setGeedVisible(false)
    }

    const handleFeedClick = () => {
        setMenuVisible(false)
        setGeedVisible(!feedVisible)
    }

    return(
        <>
        <DropDownWrapper open={menuVisible}>
            <Menu onClick={handleHamburgerClick}>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/products'>Products</StyledLink>
                <StyledLink to='/about'>About j+b</StyledLink>
            </Menu>
            <InstagramFeed visible={feedVisible}/>
            <MenuButton className='hamburger' onClick={handleHamburgerClick}>
                <div ></div>
                <div ></div>
                <div ></div>
            </MenuButton>
            <MenuButton onClick={handleFeedClick}>
                <img src={instagramLogo} alt=""  style={{width: '100%', height: '100%', opacity: '60%', background: `${feedVisible ? 'hsl(355, 68%, 67%)':'none'}`}}/>
            </MenuButton>
            
            
        </DropDownWrapper>
        
        
        </>
    )
}

export default SideMenu

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    color: hsl(187, 5%, 80%);
    padding: 20px 20px 0px 0px;
    &:hover{
        color: hsl(187, 20%, 60%);
    }
    font-size:calc(30px + 1.5vw);
    float: right;
    clear: both;
`;

const Menu = styled.span`
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100vh;
    background: hsl(187, 5%, 30%);
    overflow: hidden;
`

const MenuButton = styled.div`
    padding: 10px;
    width: 25px;
`

const DropDownWrapper = styled.div`
    z-index: 1;
    > .hamburger > div{
        z-index: 2;
        height: 4px;
        background-color: ${props => props.open ? 'hsl(187, 5%, 80%)':'hsl(187, 5%, 40%)'};
        margin: 4px 0;
        transition: transform 1s;
    }
    > span{
        transition: width 1s, min-width 1s;
        width: ${props => props.open ? '25vw':'0px'};
        min-width: ${props => props.open ? '250px':'0px'};
        padding: 0;
        margin: 0;
    }
    > .hamburger :nth-child(1){
        ${props => props.open ? 'transform: rotate(-45deg);':''}
    }
    > .hamburger :nth-child(3){
        ${props => props.open ? 'transform: rotate(45deg);':''}
    }
    > .hamburger :nth-child(2){
        transition: opacity 1s;
        opacity: ${props => props.open ? '0':'1'};
    }
    position: absolute;
    top: 0px;
    left: 0px;
`;