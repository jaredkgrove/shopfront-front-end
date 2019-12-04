import React from 'react';
import './App.css';
import ProductsView from './views/ProductsView'
import HomeView from './views/HomeView'
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './containers/Header'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


function App({location, match}) {

  return (
    <>
     {/* <div className={classes.app} > */}
      {/* <Route path='/' render= {routerProps => <Header {...routerProps}/>}/> */}
      <TransitionGroup>
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
      
    {/* </div> */}
    </>
  );
}


export default withRouter(App);
