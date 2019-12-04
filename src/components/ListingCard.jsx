import React, { useState, useEffect } from "react";

import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid';

import {fetchListingImages} from '../actions/fetchListingImages'
import { connect } from 'react-redux';


const useStyles = makeStyles({
    card: {
      width: 345,
      maxWidth: '95%',
      maxHeight: 290,
      display: 'inline-block',
      transition: 'client-left 500ms ease-in-out',
    },
    
    media: {
      height: 240,
    //   animationName: 'fadeIn',
    //   animationTimingFunction: 'ease-in',
    //   animationIterationCount: '1',
    //   animationDuration: '0.5s',
    },

    cycle:{
        height: 240,
        animationName: 'fadeInOut',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDuration: '3s',
    },

  });

    const ListingCard = ({listingData, fetchListingImages}) => {
        const [currentImage, setCurrentImage] = useState()
        const [cycleImages, setCycleImages] = useState(false)
        const classes = useStyles();

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
                let imageIndex = 1
                setCurrentImage(listingData.images[imageIndex])
                const id = setInterval(() => {
                    setCurrentImage( () => {
                        imageIndex = imageIndex + 1
                        if(imageIndex === listingData.images.length){imageIndex = 0} 
                        setCurrentImage(listingData.images[imageIndex])
                        return listingData.images[imageIndex]
                    })
                  }
                  , 3000);
                  return () => clearInterval(id);
            }

          }, [cycleImages]);


        const handleMouseOver = () => {
            setCycleImages(true)
        }

        const defaultImage = (e) => {
            setCycleImages(false)
            if(listingData.images){
                setCurrentImage(listingData.images[0])
            }
        } 

    return(   
        <Card className={classes.card} onMouseEnter={handleMouseOver} onMouseLeave={defaultImage}>
            
            <CardActionArea>
                <CardMedia
                    className={(cycleImages ? `${classes.cycle}`: `${classes.media}`) }
                    image={currentImage ? currentImage.url_570xN : ''}
                    title={listingData.title}
                    component={NavLink} 
                    to={`/products/${listingData.listing_id}`}
                />
            </CardActionArea>
            <CardActions>
                <Link href={listingData.url} target="_blank" >
                    <Button size="small" color="primary">
                        Buy
                    </Button>
                </Link>
                <Button size="small" color="primary" component={NavLink} to={`/products/${listingData.listing_id}`}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
     )
    }

const mapDispatchToProps = dispatch => {
    return {
        fetchListingImages: (listingId) => dispatch(fetchListingImages(listingId)),
    }
}

export default connect(null, mapDispatchToProps)(ListingCard)
    
