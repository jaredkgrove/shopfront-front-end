import React, {useEffect}  from "react";
import { makeStyles } from "@material-ui/core/styles";
import InstagramFeed from "../containers/InstagramFeed";
import WelcomeHeader from "../components/WelcomeHeader";

const useStyles = makeStyles(theme => ({
  app: {
    backgroundColor: theme.palette.primary.grey,
    height:'101vh',
    overflow: 'auto'
  },

}));

const HomeView = () => {
  const [currentView, setCurrentView] = React.useState(0);
  const classes = useStyles();

  const handleScroll = (e) => {
    if(e.deltaY > 0){
      nextView()
    }else{
      previousView()
    }
  }

  const nextView = () => {
    if (currentView < 1){
      setCurrentView(currentView + 1) 
    }
  }

  const previousView = () => {
    if (currentView > 0){
      setCurrentView(currentView - 1) 
    }
  }
    return(
        <div className={classes.app} onWheel={handleScroll}>
          <WelcomeHeader visible={currentView === 0} goToView={nextView}/>
          {/* <ProductsView visible={currentView === 1}/> */}

          <InstagramFeed visible={currentView === 1}/>
        </div>
    )
}

export default HomeView


