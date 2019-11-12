import fetchJsonp from 'fetch-jsonp'

export function fetchListingImages(listingId){
    return async (dispatch) => {
        const baseUrl = `https://openapi.etsy.com/v2/`
        const res = await fetchJsonp(`${baseUrl}/listings/${listingId}/images.js?callback=getData&api_key=${process.env.REACT_APP_ETSY_API_KEY}`)
        res.json()
        .then(json => dispatch({type: 'ADD_IMAGES_TO_LISTING', payload: json})
        ).catch((ex) => {
            console.log('parsing failed', ex)
        })
    }
}
