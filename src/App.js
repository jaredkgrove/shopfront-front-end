import React from 'react';
import './App.css';
import ProductsView from './views/ProductsView'
import HomeView from './views/HomeView'

import Header from './containers/Header'
import { makeStyles } from "@material-ui/core/styles";
import { Route } from 'react-router-dom';
import { height } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
  app: {
    backgroundColor: theme.palette.primary.grey,
    height:'100vh'
  },

}));


function App() {
  const classes = useStyles();
  return (
    <>
    </>
    // <div className={classes.app} >
    //   <Route path='/' render= {routerProps => <Header {...routerProps}/>}/>
      
    //   <Route exact path='/' render= {routerProps => <HomeView {...routerProps}/>}/>
    //   <Route path='/products' render= {routerProps => <ProductsView {...routerProps} />}/>
    // </div>
  );
}

export default App;
