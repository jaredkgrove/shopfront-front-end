import React from "react";

import ListingCard from '../components/ListingCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,

    },
  }));

const ProductsList = ( {listings} ) => {
    const classes = useStyles();

    const renderListings = () => listings.map(listing => <ListingCard key={listing.listing_id} listingData={listing} />)
    
    return(
      <>
          {renderListings()}
      </>
    )
}

export default ProductsList


