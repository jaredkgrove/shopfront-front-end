import React, { useEffect } from "react";

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
     
    },
    control: {
      padding: theme.spacing(2)
    },
    
  }));

const ProductView = (props) => {
    const classes = useStyles();

    useEffect(() => {
        props.fetchShopListings()
    },[])

    useEffect(() => {

    },[props.listings])

    return(
        <Grid className={classes.root} container>
            <Grid item xs={props.location.pathname === props.match.path ? 12:3}>
                <ProductsList className={classes.products} listings={props.listings} />
            </Grid>
            <Route exact path='/products/:etsyId' render= {routerProps =>             
                <Grid item xs={9}>

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
