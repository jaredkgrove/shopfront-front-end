import fetchJsonp from 'fetch-jsonp'

export function fetchShopListings(){
    return async (dispatch) => {
        // dispatch({ type: 'LOADING_SKETCH' });
        const baseUrl = `https://openapi.etsy.com/v2/`
        const res = await fetchJsonp(`${baseUrl}shops/CandlesByJared/listings/active.js?callback=getData&api_key=${process.env.REACT_APP_ETSY_API_KEY}`)

        res.json()
           .then((json) => dispatch({type: 'ADD_SHOP_LISTINGS', payload: json.results})
        )
        .catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
}
