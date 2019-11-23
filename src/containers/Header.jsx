import React, {useEffect} from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { NavLink } from 'react-router-dom';

const StyledTabs = withStyles(theme => ({
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > div": {
        maxWidth: 40,
        width: "100%",
        backgroundColor: theme.palette.secondary.dark
      }
    }
  }))(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);
  
  const StyledTab = withStyles(theme => ({
    root: {
      textTransform: "none",
      color: theme.palette.primary.dark,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(20),
      marginRight: theme.spacing(1),

      "&:focus": {
        opacity: 1
      }
    }
  }))(props => <Tab disableRipple {...props} />);
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.grey,
      padding: theme.spacing(1),
      marginBottom: theme.spacing(3)
    },
    
  }));

const Header = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
       if(props.location.pathname.includes('products')){
          setValue(1)
       }
    },[])

    const handleChange = (event, newValue) => {
      console.log(newValue)
        setValue(newValue);
    };
  
    return (
      <div className={classes.root} style={{boxSizing: 'border-box', padding: '0', margin:'0', height:'10vh'}}>
          <StyledTabs 
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
            variant = 'fullWidth'
          >
            <StyledTab label="Home"  component={NavLink} to="/"/>
            <StyledTab label="Products" component={NavLink} to="/products"/>
          </StyledTabs>
       </div>
    );
}


export default Header


