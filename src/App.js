import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './containers/ProductsList'
import HomeView from './views/HomeView'
import Header from './containers/Header'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Route } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  app: {
    backgroundColor: theme.palette.primary.grey
  },

}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.app} style={{height:'100vh'}}>
      <Header/>
      
      <Route exact path='/' render= {routerProps => <HomeView/>}/>
      <Route exact path='/products' render= {routerProps => <ProductsList {...routerProps} />}/>

    </div>
  );
}

export default App;
