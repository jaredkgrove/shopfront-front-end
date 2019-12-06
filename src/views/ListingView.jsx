import React, {useEffect, useState} from "react";
import styled, {keyframes, css} from 'styled-components'


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
                return listingData.images.map(image => <img src={image.url_170x135} onClick={e => setCurrentImage(image.url_fullxfull)}/>)
            }
        }
    }

    // const renderData = () => {
    //     if(listingData){
    //         return(<>
            

    //             <p>{listingData.description}</p>
    //             <p>{listingData.price}</p>
    //         </>)
    //     }
    // }

    return(
        <>
            <h1>{listingData ? listingData.title:''}</h1>
            <PrimaryImage src={currentImage}></PrimaryImage>
            {renderImages()}
            <p>{listingData ? listingData.description:''}</p>
            <p>{listingData ? listingData.price:''}</p>
            
       </>
    )
}



export default ListingView


const PrimaryImage = styled.img`
  display: block;
  clear: both;
  width: 80%;
  height: 50%;
  object-fit: contain;
`;
