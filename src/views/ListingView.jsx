import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    
    root: {
      width: '95%'

    },
  }));


const ListingView = ({listingData}) => {
    const classes = useStyles();

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
        <div className={classes.root}>
            {renderData()}
            {renderImages()}
        </div>
    )
}



export default ListingView


