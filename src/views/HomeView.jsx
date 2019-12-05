import React, {useEffect}  from "react";
import InstagramFeed from "../containers/InstagramFeed";
import WelcomeHeader from "../components/WelcomeHeader";
import ProductsView from "./ProductsView";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'


const HomeView = () => {
  const [currentView, setCurrentView] = React.useState(0);
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
       history.push({pathname:'/products'})
    }
  }

  const previousView = () => {
    if (currentView > 0){
      // setCurrentView(currentView - 1) 
      // history.push('/')
    }
  }
    return(
        <Home onWheel={handleScroll}>
          <WelcomeHeader visible={true}/>
          {/* <ProductsView visible={currentView === 1}/> */}

          {/* <InstagramFeed visible={true}/> */}
        </Home>
    )
}

export default HomeView


const Home = styled.div`
  top: 0px;
  position: absolute;
  overflow: auto;
  width: 100vw;
`;