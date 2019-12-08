import React, { useState, useEffect, useRef } from "react";

import { Link } from 'react-router-dom';

import {fetchListingImages} from '../actions/fetchListingImages'
import { connect } from 'react-redux';
import styled from 'styled-components'

const ListingCard = ({listingData, fetchListingImages, fullDisplay}) => {
    const [currentImage, setCurrentImage] = useState()
    const [cycleImages, setCycleImages] = useState(false)
    const cardRef = useRef(null)

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

    const getCardInfo = () => {
        if(fullDisplay){
            return (         
                <>       

                </>
            )
        }else{
            return (         
                <>       
                <h1>{listingData.title}</h1>
                </>
            )
        }
    }

    return(   
        <Card ref={cardRef} to= {`/products/${listingData.listing_id}`} onMouseEnter={handleMouseOver} onMouseLeave={stopCycle} full={fullDisplay}>
            <CardImage className='listing-image' image={currentImage} full={fullDisplay}/>
            <FullCardInfo visible={fullDisplay}>
                <h1>{listingData.title}</h1>
                <p>{listingData.description}</p>
                <p>{listingData.price}</p>
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
    transition: height 0.5s ease-in ${props => props.full ? '0.5s':''}, min-width 0.5s ease-in ${props => props.full ? '0.5s':''};
    margin: 1em;
    background: ${props => props.image ? `url(${props.full ? props.image.url_570xN:props.image.url_170x135})` : "grey"};
    background-size: cover;
    background-position: bottom;
    min-width:${props => props.full ? '345px':'170px'};
    min-height: 135px;
`;
// style={{float: 'left', width:`${fullDisplay ? '65%':'0px'}`, height:`${fullDisplay ? '100%':'0px'}`, textAlign: 'left', overflow: 'hidden'}}
const FullCardInfo = styled.div`
    overflow: hidden;
    text-align: left;
    font-size: 1em;
    margin: 1em;
    transition: opacity 0.5s ease-in ${props => props.visible ? '1s':''}
    opacity:${props => props.visible ? '1':'0'};
`;



const Card = styled(Link)`
    color: hsl(187, 5%, 40%);
    text-decoration: none;
    box-sizing: border-box;
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
    &:hover {
        color: hsl(187, 5%, 60%);
        > .listing-image {
            animation-name: fadeInOut;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-duration: 3s;
        }
    }
`;

const ExternalLink = styled.a`
    position: absolute;
    bottom: 0px;
    text-decoration: none;
    color: hsl(187, 52%, 60%);
    display: inline-block;
    right: 25%;
    width: 25%;
    border-radius: 2px;
    box-shadow: -1px 2px 1px 2px hsl(187, 5%, 90%);
    bottom: 0px;
`;

const InternalLink = styled(Link)`
    position: absolute;
    bottom: 0px;
    right 0px;
    text-decoration: none;
    color: hsl(187, 52%, 60%);
    display: inline-block;
    width: 25%;
    border-radius: 2px;
    box-shadow: -1px 2px 1px 2px hsl(187, 5%, 90%);
    bottom: 0px;
`;

// to: /products/${props => props.listingData.listing_id};