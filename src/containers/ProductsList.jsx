import React from 'react';
import jsonp from 'jsonp'
export default class ProductsList extends React.Component {




    fetchListings = () => {
        console.log('hi')
//         const options = {
//             // method: 'GET',
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json',
//             },
//             // body: JSON.stringify(payload),
//             cors: true, // allow cross-origin HTTP request
//             credentials: 'same-origin' // This is similar to XHR’s withCredentials flag
//           };
//             // dispatch({ type: 'LOADING_SKETCH' });
// //             fetch('http://bar.com/data.json', {
// //   mode: 'no-cors' // 'cors' by default
// // })
// // fetch('http://example.com/', options).then((response) => {
// //     // TODO
// //   }).catch((error) => {
// //     // TODO
// //   });
//             fetch(`https://openapi.etsy.com/v2/shops/CandlesByJared/listings/active?api_key=${process.env.REACT_APP_ETSY_API_KEY}`, options)
//             .then((resp) => resp.json())
//             .then((listings) => {console.log(listings)})
    }


    componentDidMount(){
        jsonp(`https://openapi.etsy.com/v2/shops/CandlesByJared/listings/active.js?callback=getData&api_key=${process.env.REACT_APP_ETSY_API_KEY}`, (err, data) => {
            console.log(data);})
        // this.fetchListings()
    }

    render(){
      
        return(
            <div className='products-list'>

            </div>
        )
    }
}





