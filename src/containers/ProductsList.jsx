import React, { useState, useEffect, useRef } from "react";

import fetchJsonp from 'fetch-jsonp'
import Listing from '../components/Listing'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    control: {
      padding: theme.spacing(2)
    }
  }));

const ProductsList = () => {
    const [listings, setListings] = useState([])
    const classes = useStyles();

    useEffect(() => {
        async function fetchListings() {
            const baseUrl = `https://openapi.etsy.com/v2/`
            const res = await fetchJsonp(`${baseUrl}shops/CandlesByJared/listings/active.js?callback=getData&api_key=${process.env.REACT_APP_ETSY_API_KEY}`)

            res.json()
            .then(json => 
                setListings(json.results)
            ).catch(function(ex) {
                console.log('parsing failed', ex)
            })
        }
        fetchListings() 
    },[])



    const renderListings = () => {
        console.log(listings)
        return listings.map(listing => <Listing listingData={listing}/>)
    }

      
        return(
            <Grid className={classes.root} container justify="space-around" >
                {renderListings()}
            </Grid>
        )
}


export default ProductsList


