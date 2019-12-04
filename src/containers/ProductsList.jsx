import React from "react";

import ListingCard from '../components/ListingCard'


const ProductsList = ( {listings} ) => {

    const renderListings = () => listings.map(listing => <ListingCard key={listing.listing_id} listingData={listing} />)
    
    return(
      <>
          {renderListings()}
      </>
    )
}

export default ProductsList


