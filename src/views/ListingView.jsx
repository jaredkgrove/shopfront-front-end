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
                return listingData.images.map(image => <img src={image.url_75x75} onClick={e => setCurrentImage(image.url_fullxfull)} style={{margin: '10px 5px 10px 5px'}}/>)
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
            <p style={{fontSize: '3vw', margin: '10px', color: 'hsl(187, 5%, 40%)'}}>{listingData ? listingData.title:''} </p>
            <PrimaryImage src={currentImage}></PrimaryImage>
            {renderImages()}
            <p style={{display: 'inline-block', textAlign: 'left', margin: 'auto;', width: '80%', color: 'hsl(187, 5%, 40%)'}}>{listingData ? listingData.description:''}</p>
            <p style={{display: 'inline-block', textAlign: 'left', margin: 'auto;', width: '80%', color: 'hsl(187, 5%, 40%)'}}>{listingData ? `$${listingData.price}`:''}</p>
       </>
    )
}



export default ListingView


const PrimaryImage = styled.img`
  display: block;
  margin: 0 auto;
  clear: both;
  width: 80%;
  height: 50%;
  object-fit: contain;
`;
