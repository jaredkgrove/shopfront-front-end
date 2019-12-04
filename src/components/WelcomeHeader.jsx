import React, {useEffect} from "react";
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import welcomeImage from '../images/welcome.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        // transition: 'height 500ms ease-in-out, opacity 500ms ease-in-out',
        height: '100vh',
        background: `url(${welcomeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    title: {
        top:'0px',
        fontSize: '15vh',
        width: '100%',
        color: theme.palette.primary.grey,

    },
    subtitle: {
        bottom:'0px',
        fontSize: '50px',
        width: '100%',
        padding:'10px',
        color: theme.palette.primary.grey,

    },
    buttonContainer: {
        width: '100%',
        left:'0px',
        position: 'absolute',

        bottom:'0'
    },
    button: {
        border:'none',
        outline: 'none',
        background: theme.palette.secondary.dark,
        opacity: '0.5',
        color: theme.palette.primary.grey,
        fontSize:'40px',
    }
  }));

const WelcomeHeader = ({visible, goToView}) => {
    const classes = useStyles();
    
    return(

        <>
            <div className={classes.root}>
                <div className={classes.title}>J&B</div>
                <div className={classes.subtitle}>Simple Modern Handmade</div>
                <div className={classes.buttonContainer}><Link to='/products' className={classes.button}> Learn More </Link></div>
            </div>
        </>
        
    )
}

export default WelcomeHeader


