import React, { useEffect, useRef } from "react";

import ProductsList from "../containers/ProductsList";
import { Route } from 'react-router-dom';
import ListingView from './ListingView'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import {fetchShopListings} from '../actions/fetchShopListings'
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    
    root: {
      flexGrow: 1,
      height: '88vh'

    },
    animate:{
        transition: 'flex-basis 500ms ease-in-out',
    },
    fadeIn:{
      animationName: 'delayFadeIn',
      animationTimingFunction: 'ease-in',
      animationIterationCount: '1',
      animationDuration: '1s',
    },
    full:{
        flexBasis:'100%',
    },
    
    side:{
        flexBasis:'25%',
    },
    scroll:{
      overflow: 'auto',
      maxHeight: '90vh'
    },


    
  }));

const ProductView = (props) => {
    const classes = useStyles();

    useEffect(() => {
      if(!props.listings.length){
        props.fetchShopListings()
      }
    },[])

    return(
        <Grid className={classes.root} container>
            <Grid container justify="space-around" className={props.location.pathname === props.match.path ? `${classes.animate} ${classes.scroll} ${classes.full}`:`${classes.animate} ${classes.scroll} ${classes.side}`}>
                <ProductsList listings={props.listings} />
            </Grid>
            <Route exact path='/products/:etsyId' render= {routerProps =>             
              <Grid container className={classes.scroll && classes.fadeIn} xs={9} justify="space-around" >
                  <ListingView listingData={props.listings[props.listings.findIndex(listing => listing.listing_id == routerProps.match.params.etsyId)]} {...routerProps} />
              </Grid>}
            />
        </Grid>
    )
}


const mapDispatchToProps = dispatch => {
    return {
      fetchShopListings: () => dispatch(fetchShopListings()),
    }
  }

const mapStateToProps = state => {
    return {
        listings: state.listings
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductView)
