import React, { useEffect, useRef } from "react";

import ProductsList from "../containers/ProductsList";
import { Route } from 'react-router-dom';
import ListingView from './ListingView'

import {fetchShopListings} from '../actions/fetchShopListings'
import { connect } from 'react-redux';
import styled from 'styled-components'


const ProductView = (props) => {
    useEffect(() => {
      if(!props.listings.length){
        props.fetchShopListings()
      }
    },[])

    return(
        <ProductViewWrapper>
          <ProductsListWrapper full={props.location.pathname === props.match.path}>
              <ProductsList listings={props.listings} />
          </ProductsListWrapper>
          <Route exact path='/products/:etsyId' render= {routerProps =>             
            <ListingViewWrapper>
                <ListingView listingData={props.listings[props.listings.findIndex(listing => listing.listing_id == routerProps.match.params.etsyId)]} {...routerProps} />
            </ListingViewWrapper>}
          />
        </ProductViewWrapper>
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

const ProductViewWrapper = styled.div`
  flex-grow: 1;
  overflow: hidden;
  bottom: 0px;
  position: absolute;
`;

const ListingViewWrapper = styled.div`
    animation-name: delayFadeIn;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-duration: 1s;
    position: absolute;
    width: 75%;
    right: 0px;
    top: 0px;
`;

const ProductsListWrapper = styled.div`

  ${props => props.full ? `
    overflow: scroll;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  ` : `
    animation-name: productListFullToSide;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-duration: 1s;
    animation-fill-mode: forwards;  
    overflow: scroll;
  `}

`;
