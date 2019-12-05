import React from 'react';
import './App.css';
import ProductsView from './views/ProductsView'
import HomeView from './views/HomeView'
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './containers/Header'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { createGlobalStyle } from 'styled-components'




function App({location, match}) {

  return (
      <TransitionGroup>
        <TransitionStyles/>
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
    top: 100vh
  }
  .fade-enter.fade-enter-active {
    top: 0px;
    transition: top 0.5s;
  }
  .fade-exit {
    top: 0px;
  }

  .fade-exit.fade-exit-active {
    top: 100vh;
    transition: top 0.5s;
  }

  .home-view.fade-enter {
    top: -100vh
  }
  .home-view.fade-enter.fade-enter-active {
    top: 0px;
    transition: top 0.5s;
  }
  .home-view.fade-exit {
    top: 0px;
  }

  .home-view.fade-exit.fade-exit-active {
    top: -100vh;
    transition: top 0.5s;
  }
`