import React, {useEffect}  from "react";
// import { makeStyles } from "@material-ui/core/styles";
import InstagramFeed from "../containers/InstagramFeed";
// import { Grid } from "@material-ui/core";
import image1 from '../images/welcome.jpg'
import image2 from '../images/image2.jpg'


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
        <div>
            <div style={{flexGrow:'1', background: `url(${image2}), url(${image1}), url(${image2})`, backgroundSize:'contain, contain', backgroundRepeat: 'no-repeat, repeat', backgroundPosition: 'top, bottom'}}>
                Our Products
                
            </div>

            <div style={{flexGrow:'1'}}>WHO WE ARE</div>
            {/* <InstagramFeed visible={true}/> */}
            

        </div>
    )
}

export default NavigationView


