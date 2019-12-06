import React from "react";
import styled from 'styled-components'
import NavigationView from "../views/NavigationView";
import { Link } from 'react-router-dom';


const DropDownMenu = ( {listings} ) => {
    const [menuVisible, setMenuVisible] = React.useState(false);
    
    const handleClick = () => {
        setMenuVisible(!menuVisible)
    }

    return(
        <DropDownWrapper onClick={handleClick} open={menuVisible}>
            <Menu>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/products'>Products</StyledLink>
            </Menu>
            <div className='.icon'></div>
            <div className='.icon'></div>
            <div className='.icon'></div>
        </DropDownWrapper>
    )
}

export default DropDownMenu

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    color: hsl(187, 5%, 80%);
    &:hover{
        color: hsl(187, 20%, 60%);
    }
    font-size:calc(30px + 1.5vw);
    float: left;
    clear: both;
`;

const Menu = styled.span`
    position: absolute;
    right: 0px;
    top: -20px;
    height: 100vh;
    background: hsl(187, 5%, 30%);
    overflow: hidden;
`

const DropDownWrapper = styled.div`
    z-index: 1;
    > div{
        z-index: 2;
        width: 35px;
        height: 5px;
        background-color: ${props => props.open ? 'hsl(187, 5%, 80%)':'hsl(187, 5%, 40%)'};
        margin: 6px 0;
        transition: transform 1s;
    }
    > span{
        transition: width 1s, min-width 1s;
        width: ${props => props.open ? '25vw':'0px'};
        min-width: ${props => props.open ? '250px':'0px'};
        padding: 0;
        margin: 0;
    }
    >:nth-child(2){
        ${props => props.open ? 'transform: rotate(45deg);':''}
    }
    >:nth-child(4){
        ${props => props.open ? 'transform: rotate(-45deg);':''}
    }
    >:nth-child(3){
        transition: opacity 1s;
        opacity: ${props => props.open ? '0':'1'};
    }
    position: absolute;
    top: 20px;
    right: 10px;
`;