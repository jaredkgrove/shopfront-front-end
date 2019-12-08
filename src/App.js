import React from 'react';
import './App.css';
import ProductsView from './views/ProductsView'
import HomeView from './views/HomeView'
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { createGlobalStyle } from 'styled-components'
import SideMenu from './containers/SideMenu';




function App({location, match}) {

  return (
      <TransitionGroup>
        <TransitionStyles/>
        <SideMenu/>
        <CSSTransition
                  key={location.pathname.split('/')[1]}
                  classNames="fade"
                  timeout={500}
        >            
          <Switch location={location}>
              
              <Route exact path='/' render= {routerProps => <HomeView {...routerProps}/>}/>
              <Route path='/products' render= {routerProps => <ProductsView {...routerProps} />}/>  
              <Route path='/about' render= {routerProps => <h1 style={{position: 'absolute', left: '0px', padding: '0px', margin: '0px', height: '100vh', width: '100vw', background:'hsl(187, 10%, 95%)'}}>Some cool stuff about j+b</h1>}/>  
              <Route render={() => <div>Not Found</div>} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
  );
}


export default withRouter(App);


const TransitionStyles = createGlobalStyle`
  .fade-enter {
    z-index:1;
    top: 100vh;
  }
  .fade-enter.fade-enter-active {
    z-index:1;
    top: 0px;
    transition: top 0.5s;
  }
  .fade-exit {
    top: 0px;
    z-index: 0;
  }

  .fade-exit.fade-exit-active {
    top: 100vh;
    transition: top 0.5s;
    z-index: 0;
  }

  .home-view.fade-enter {
    z-index: -1;
    top: 0px;
  }
  .home-view.fade-enter.fade-enter-active {
    z-index: -1;
    top: 0px;
  }
  .home-view.fade-exit {
    z-index: -1;
    top: -100vh;
  }

  .home-view.fade-exit.fade-exit-active {
    z-index: -1;
    top: -100vh;
  }
`