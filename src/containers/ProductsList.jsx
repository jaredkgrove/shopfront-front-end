import React from "react";

import ListingCard from '../components/ListingCard'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2)
    },
  }));

const ProductsList = ( {listings} ) => {
    const classes = useStyles();

    const renderListings = () => listings.map(listing => <ListingCard key={listing.listing_id} listingData={listing} />)
    
    return(
      <Grid className={classes.root} container justify="space-around" >
          {renderListings()}
      </Grid>
    )
}

export default ProductsList


