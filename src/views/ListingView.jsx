import React, {useEffect} from "react";


const ListingView = ({listingData}) => {
    useEffect(() => {
        
    },[listingData])
    const renderImages = () => {
        if(listingData){
            if(listingData.images){
                return listingData.images.map(image => <img src={image.url_170x135}/>)
            }
        }
    }

    const renderData = () => {
        if(listingData){
            return(<>
                <h1>{listingData.title}</h1>
                <p>{listingData.description}</p>
                <p>{listingData.price}</p>
            </>)
        }
    }

    return(
        <div style={{width: '95%'}}>
            {renderData()}
            {renderImages()}
        </div>
    )
}



export default ListingView


