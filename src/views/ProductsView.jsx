import React, { useEffect, useRef } from "react";

import ProductsList from "../containers/ProductsList";
import { Route } from 'react-router-dom';
import ListingView from './ListingView'

import {fetchShopListings} from '../actions/fetchShopListings'
import { connect } from 'react-redux';
import styled, {keyframes, css} from 'styled-components'


const ProductView = (props) => {
    useEffect(() => {
      if(!props.listings.length){
        props.fetchShopListings()
      }
    },[])

    return(
        <ProductViewWrapper className='products-view'>
          <ProductsListWrapper full={props.location.pathname === props.match.path}>
              <ProductsList listings={props.listings} fullDisplay={props.location.pathname === props.match.path}/>
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

const fadeIn = keyframes`
  0% {
    display:none;
    width: 0;
    opacity:0;
  }
  66%{
    display:block;
  
    opacity:0;
  }
  100% {

    opacity:1;
  }
`


const ProductViewWrapper = styled.div`
  overflow: hidden;
  top: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: stretch;
`;

const ListingViewWrapper = styled.div`
    overflow: auto;
    animation-name: ${fadeIn};
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
`;

const ProductsListWrapper = styled.div`
  overflow: auto;
  max-height: 100vh;
  display: inline-block;
  float:left;
  min-height: calc(135px + 4em);
  ${props => props.full ? `
    transition: width 0.5s linear ;
    width: 100vw;
  ` : `
  transition: width 0.5s linear 0.5s;
    width: calc(170px + 4em);
    min-width: calc(170px + 4em);

  `}

`;


