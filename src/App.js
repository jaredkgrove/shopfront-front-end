import React from 'react';
import './App.css';
import ProductsView from './views/ProductsView'
import HomeView from './views/HomeView'

import Header from './containers/Header'
import { makeStyles } from "@material-ui/core/styles";
import { Route } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  app: {
    backgroundColor: theme.palette.primary.grey
  },

}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.app} >
      <Header/>
      
      <Route exact path='/' render= {routerProps => <HomeView {...routerProps}/>}/>
      <Route path='/products' render= {routerProps => <ProductsView {...routerProps} />}/>

    </div>
  );
}

export default App;
