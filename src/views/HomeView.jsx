import React, {useEffect}  from "react";
import WelcomeHeader from "../components/WelcomeHeader";
import styled from 'styled-components'
import NavigationView from "./NavigationView";



const HomeView = () => {
  const [currentView, setCurrentView] = React.useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrentView(1) 
    }, 5000);
    return () => clearTimeout(id);
  }, []);

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
        <Home className='home-view' onWheel={handleScroll} view={currentView}>
          <WelcomeHeader visible={currentView === 0}/>
          <NavigationView visible={currentView === 1}/>
        </Home>
    )
}

export default HomeView


const Home = styled.div`
  top: ${props => props.view === 0 ? '0px' : '-100vh'};
  left: 0px;
  transition: top 1s ease-in
  position: absolute;
  overflow: auto;
  width: 100vw;
`;