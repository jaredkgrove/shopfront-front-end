import React, {useEffect}  from "react";
import { makeStyles } from "@material-ui/core/styles";
import InstagramFeed from "../containers/InstagramFeed";
import WelcomeHeader from "../components/WelcomeHeader";
import ProductsView from "./ProductsView";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  home: {
    backgroundColor: theme.palette.primary.grey,
    // height:'100vh',
    top:'0px',
    position:'absolute',
    overflow: 'hidden',
    width: '100vw'
  },

}));

const HomeView = () => {
  const [currentView, setCurrentView] = React.useState(0);
  const classes = useStyles();
  let history = useHistory();

  const handleScroll = (e) => {
    if(e.deltaY > 0){
      nextView()
    }else{
      previousView()
    }
  }

  const nextView = () => {
    if (currentView < 1){
      // setCurrentView(currentView + 1) 
      // browserHistory.push({
      //   pathname: '/products'
      //  });\
      // console.log(props)
      
       history.push({pathname:'/products'})
      // history.go(1)
      // history.go(1)

      // window.history.pushState('', '', '/products')
    }
  }

  const previousView = () => {
    if (currentView > 0){
      // setCurrentView(currentView - 1) 
      // history.push('/')
    }
  }
    return(
        <div className={classes.home} onWheel={handleScroll}>
          <WelcomeHeader visible={true}/>
          {/* <ProductsView visible={currentView === 1}/> */}

          {/* <InstagramFeed visible={currentView === 1}/> */}
        </div>
    )
}

export default HomeView


