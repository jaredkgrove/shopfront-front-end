import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

import {fetchListingImages} from '../actions/fetchListingImages'
import { connect } from 'react-redux';
import styled from 'styled-components'

const ListingCard = ({listingData, fetchListingImages}) => {
    const [currentImage, setCurrentImage] = useState()
    const [cycleImages, setCycleImages] = useState(false)

    useEffect(() =>{
        if(!listingData.images){
            fetchListingImages(listingData.listing_id)
        }
    }
    ,[]);

    useEffect(() =>{
        if(listingData.images){
            setCurrentImage(listingData.images[0])
        }
    }
    ,[listingData]);

    useEffect(() => {
        if(cycleImages && listingData.images){
            let imageIndex = listingData.images.indexOf(currentImage)
            const id = setInterval(() => {
                setCurrentImage( () => {
                    imageIndex = imageIndex + 1
                    if(imageIndex === listingData.images.length){imageIndex = 0} 
                    setCurrentImage(listingData.images[imageIndex])
                    return listingData.images[imageIndex]
                })
            }, 3000);
            return () => clearInterval(id);
        }
    }, [cycleImages]);


    const handleMouseOver = () => {
        setCycleImages(true)
    }

    const stopCycle = (e) => {
        setCycleImages(false)
    } 

    return(   
        <Card  onMouseEnter={handleMouseOver} onMouseLeave={stopCycle}>
            <ListingImage to= {`/products/${listingData.listing_id}`} image={currentImage}></ListingImage>
            <ExternalLink href={listingData.url} target="_blank" >Buy</ExternalLink>
            <InternalLink to= {`/products/${listingData.listing_id}`} >Learn More</InternalLink>
        </Card>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchListingImages: (listingId) => dispatch(fetchListingImages(listingId)),
    }
}

export default connect(null, mapDispatchToProps)(ListingCard)
    
const ListingImage = styled(Link)`
    display: block;
    height: 240px;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    background: ${props => props.image ? `url(${props.image.url_570xN})` : "red"};
    background-size: cover;

    &:hover {
        animation-name: fadeInOut;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-duration: 3s;
    }
`;

const Card = styled.div`
    position: relative;
    display: inline-block;
    width: 345px;
    max-width: 95%;
    max-height: 325px;
    border-radius: 2px;
    box-shadow: -2px 4px 3px 4px hsl(187, 5%, 90%);
`;

const ExternalLink = styled.a`
    position: absolute;
    bottom: 0px;
    left: 0px;
    text-decoration: none;
    color: hsl(187, 52%, 60%);
    display: inline-block;
    width: 50%;
    border-radius: 2px;
    box-shadow: -1px 2px 1px 2px hsl(187, 5%, 90%);
    bottom: 0px;
`;

const InternalLink = styled(Link)`
    position: absolute;
    bottom: 0px;
    right: 0px;
    text-decoration: none;
    color: hsl(187, 52%, 60%);
    display: inline-block;
    width: 50%;
    border-radius: 2px;
    box-shadow: -1px 2px 1px 2px hsl(187, 5%, 90%);
    bottom: 0px;
`;

// to: /products/${props => props.listingData.listing_id};