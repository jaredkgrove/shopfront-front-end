import React, { useEffect, useRef } from "react";

import ProductsList from "../containers/ProductsList";
import { Route } from 'react-router-dom';
import ListingView from './ListingView'
import { makeStyles } from '@material-ui/core/styles';

import {fetchShopListings} from '../actions/fetchShopListings'
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      bottom:'0px',
      position:'absolute',

    },
    fadeIn:{
      animationName: 'delayFadeIn',
      animationTimingFunction: 'ease-in',
      animationIterationCount: '1',
      animationDuration: '1s',
      position: 'absolute',
      width: '75%',
      right: '0px',
      top: '0px'
    },
    full:{
      overflow:'scroll ',
      height:'100vh',
      width:'100vw',
      display: 'flex',
      flexDirection: 'row',
      // flexBasis: '50%',
      justifyContent: 'space-around'
    },
    
    side:{
      animationName: 'productListFullToSide',
      animationTimingFunction: 'ease-in',
      animationIterationCount: '1',
      animationDuration: '1s',
      animationFillMode: 'forwards',  
      overflow:'scroll ',
    },
    scroll:{
      // overflow: 'auto',
      // maxHeight: '90vh'
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
        <div className={classes.root}>
                <div className={props.location.pathname === props.match.path ? `${classes.animate} ${classes.scroll} ${classes.full}`:`${classes.animate} ${classes.scroll} ${classes.side}`}>
                  <ProductsList listings={props.listings} />
                </div>
            <Route exact path='/products/:etsyId' render= {routerProps =>             
              <div className={classes.scroll && classes.fadeIn} >
                  <ListingView listingData={props.listings[props.listings.findIndex(listing => listing.listing_id == routerProps.match.params.etsyId)]} {...routerProps} />
              </div>}
            />
          </div>
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
