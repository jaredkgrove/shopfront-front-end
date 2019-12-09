import React, {useEffect}  from "react";
import WelcomePane from "../components/WelcomePane";
import styled from 'styled-components'
import NavigationPane from "../components/NavigationPane";



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
          <WelcomePane visible={currentView === 0}/>
          <NavigationPane visible={currentView === 1}/>
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