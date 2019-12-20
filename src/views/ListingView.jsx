import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const ListingView = ({listingData}) => {
    const [currentImage, setCurrentImage] = useState()
    useEffect(() => {
        if(listingData){
            if(listingData.images){
                setCurrentImage(listingData.images[0].url_fullxfull)
            }
        }
    },[listingData])
    const renderImages = () => {
        if(listingData){
            if(listingData.images){
                return listingData.images.map(image => <img key={image.url_75x75} src={image.url_75x75} alt={`${listingData.title}`}  onClick={e => setCurrentImage(image.url_fullxfull)} style={{margin: '10px 5px 10px 5px'}}/>)
            }
        }
    }

    return(
        <>
            <BackToProducts to='/products'>
                <div style={{transform: 'rotate(45deg)'}}></div>
                <div style={{transform: 'rotate(-45deg)'}}></div>
            </BackToProducts>
            <PrimaryImage src={currentImage}></PrimaryImage>
            {renderImages()}
            <p style={{fontWeight: 'bold', display: 'inline-block', textAlign: 'left', margin: 'auto', width: '80%', color: 'hsl(187, 5%, 40%)'}}>{listingData ? listingData.title:''} </p>
            <p style={{display: 'inline-block', textAlign: 'left', margin: 'auto;', width: '80%', color: 'hsl(187, 5%, 40%)'}}>{listingData ? `$${listingData.price}`:''}
                <ExternalLink href={listingData ? listingData.url:''} target='_blank'>Buy On Etsy</ExternalLink>
            </p>
           <p style={{display: 'inline-block', textAlign: 'left', margin: 'auto;', width: '80%', color: 'hsl(187, 5%, 40%)'}}>{listingData ? listingData.description:''}</p>
       </>
    )
}



export default ListingView

const ExternalLink = styled.a`
    display: inline-block;
    margin: 0px 0px 0px 10px;
    padding: 5px;
    text-decoration: none;
    color:  hsl(187, 5%, 90%);
    background: hsl(23, 84%, 52%);
    border-radius: 4px;
`;

const PrimaryImage = styled.img`
    display: block;
    margin: 0 auto;
    clear: both;
    width: 80%;
    height: 50%;
    object-fit: contain;
`;

const BackToProducts = styled(Link)`
    z-index: 1;
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 20px;
    width: 30px;
    > div{
        z-index: 2;
        height: 5px;
        background-color: ${props => props.open ? 'hsl(187, 5%, 80%)':'hsl(187, 5%, 40%)'};
        margin: 0px 0px -5px 0px;
    }
`;
