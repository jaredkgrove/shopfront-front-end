import React from "react";

import ListingCard from '../components/ListingCard'


const ProductsList = ( {listings, fullDisplay} ) => {

    const renderListings = () => listings.map(listing => <ListingCard key={listing.listing_id} listingData={listing} fullDisplay={fullDisplay}/>)
    
    return(
      <>
          {renderListings()}
      </>
    )
}

export default ProductsList


