import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {fetchListingImages} from '../actions/fetchListingImages'
import { connect } from 'react-redux';
import styled from 'styled-components'

const ListingCard = ({listingData, fetchListingImages, fullDisplay}) => {
    const [currentImage, setCurrentImage] = useState()
    const [cycleImages, setCycleImages] = useState(false)

    useEffect(() =>{
        if(!listingData.images){
            fetchListingImages(listingData.listing_id)
        }
    }
    ,[listingData.listing_id, listingData.images, fetchListingImages]);

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
    }, [cycleImages, currentImage, listingData.images]);


    const handleMouseOver = () => {
        setCycleImages(true)
    }

    const stopCycle = (e) => {
        setCycleImages(false)
    } 

    return(   
        <Card to= {`/products/${listingData.listing_id}`} onMouseEnter={handleMouseOver} onMouseLeave={stopCycle} full={fullDisplay}>
            <CardImage className='listing-image' image={currentImage} full={fullDisplay}/>
            <FullCardInfo visible={fullDisplay}>
                <h1>{listingData.title}</h1>
                <p>{listingData.description}</p>
            </FullCardInfo>
        </Card>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchListingImages: (listingId) => dispatch(fetchListingImages(listingId)),
    }
}

export default connect(null, mapDispatchToProps)(ListingCard)
    
const CardImage = styled.div`
    box-sizing: border-box;
    transition: height 0.5s ease-in ${props => props.full ? '0.5s':''}, min-width 0.5s ease-in ${props => props.full ? '0.5s':''};
    margin: 1em;
    background: ${props => props.image ? `url(${props.full ? props.image.url_570xN:props.image.url_170x135})` : "grey"};
    background-size: cover;
    background-position: bottom;
    min-width:${props => props.full ? '325px':'170px'};
    @media screen and (max-width: 500px) {
        min-width:${props => props.full ? 'calc(100% - 2em)':'0px'};
    }
    min-height: 135px;
`;
const FullCardInfo = styled.div`
    overflow: auto;
    text-align: left;
    font-size: 1em;
    > h1{
        font-size: 1.25em;
    }
    margin: 1em;
    transition: opacity 0.5s ease-in ${props => props.visible ? '1s':''}
    opacity:${props => props.visible ? '1':'0'};
    @media screen and (max-width: 500px) {
        display:${props => props.full ? '':'none'};
    }
`;



const Card = styled(Link)`
    color: hsl(187, 5%, 60%);
    text-decoration: none;

    position: relative;
    display: flex;
    transition: height 0.5s ease-in ${props => props.full ? '0.5s':''};

    flex-direction:${props => props.full ? 'row':'row'};
    justify-content: stretch;
    clear: both;
    height: ${props => props.full ? '325px':'135px'};
    min-height: calc(135px + 4em);
    margin: 1em;
    border-radius: 2px;
    box-shadow: -2px 4px 3px 4px hsl(187, 5%, 90%);
    @media screen and (max-width: 800px) {
        font-size: 0.8em;
    }
    &:hover {
        color: hsl(187, 5%, 40%);
        > .listing-image {
            animation-name: fadeInOut;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-duration: 3s;
        }
    }
`;
