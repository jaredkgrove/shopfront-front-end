import React from 'react';
import './App.css';
import ProductsView from './views/ProductsView'
import HomeView from './views/HomeView'
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './containers/Header'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import DropDownMenu from './containers/DropDownMenu';




function App({location, match}) {

  return (
      <TransitionGroup>
        <TransitionStyles/>
        <DropDownMenu/>
        <CSSTransition
                  key={location.pathname.split('/')[1]}
                  classNames="fade"
                  timeout={500}
        >            
          <Switch location={location}>
              
              <Route exact path='/' render= {routerProps => <HomeView {...routerProps}/>}/>
              <Route path='/products' render= {routerProps => <ProductsView {...routerProps} />}/>  

          </Switch>
                      
            {/* <Route render={() => <div>Not Found</div>} /> */}
        </CSSTransition>
      </TransitionGroup>
  );
}


export default withRouter(App);


const TransitionStyles = createGlobalStyle`
  .fade-enter {
    left: 100vw;
  }
  .fade-enter.fade-enter-active {
    left: 0px;
    transition: left 0.5s;
  }
  .fade-exit {
    left: 0px;
  }

  .fade-exit.fade-exit-active {
    left: 100vw;
    transition: left 0.5s;
  }

  .home-view.fade-enter {
    left: -100vw;
  }
  .home-view.fade-enter.fade-enter-active {
    left: 0px;
    transition: left 0.5s;
  }
  .home-view.fade-exit {
    left: 0px;
  }

  .home-view.fade-exit.fade-exit-active {
    left: -100vw;
    transition: left 0.5s;
  }
`