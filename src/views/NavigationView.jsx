import React, {useEffect}  from "react";
// import { makeStyles } from "@material-ui/core/styles";
import InstagramFeed from "../containers/InstagramFeed";
// import { Grid } from "@material-ui/core";
import image1 from '../images/welcome.jpg'
import image2 from '../images/image2.jpg'
import styled from 'styled-components'

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         boxSizing:'border-box',
//         height: '100vh',
//         width: '100vw',
//         flexGrow: 1,
//         flexDirection: 'row',
//         transition: 'height 500ms ease-in-out, opacity 500ms ease-in-out',
//         alignContent:'center',

//         // position:'absolute',
//         // top:'0'

//     },
//     hidden: {
//         height:'0px',
//         opacity:'0'
//     }

// }));

const NavigationView = ({visible}) => {

    return(
        // <div className={visible ? classes.root:`${classes.root} ${classes.hidden}`}>
        
        <NavigationWrapper isVisible={visible}>
            <div style={{flex:'1', height: '100%'}}>OUR PRODUCTS</div>

            <div style={{flex:'1',  height: '100%'}}>WHO WE ARE</div>
            {/* <InstagramFeed visible={true}/> */}
            

        </NavigationWrapper>
    )
}

export default NavigationView


const NavigationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: ${props => props.isVisible ? '100vh' : '0px'};
    width: 100%;
`;


