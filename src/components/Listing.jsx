import React, { useState, useEffect, useRef } from "react";
import Fade from "@material-ui/core/Fade";

import fetchJsonp from 'fetch-jsonp'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    card: {
      width: 345,
    },
    
    media: {
      height: 240,
    },

    cycle:{
        animationName: 'cf3FadeInOut',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDuration: '3s',
    },

  });

    const Listing = (props) => {
        const [images, setImages] = useState([]);
        const [currentImage, setCurrentImage] = useState({index:-1, data:{}})
        const [cycleImages, setCycleImages] = useState(false)
        const imagesWrapper = useRef()
        const classes = useStyles();
        const preventDefault = event => event.preventDefault();

        useEffect(() =>{
            async function fetchData() {
                const baseUrl = `https://openapi.etsy.com/v2/`
                const res = await fetchJsonp(`${baseUrl}/listings/${props.listingData.listing_id}/images.js?callback=getData&api_key=${process.env.REACT_APP_ETSY_API_KEY}`)

                res.json()
                .then((json) => {
                    setImages(json.results)
                    setCurrentImage({index:0, data:json.results[0]})
                } 
                ).catch((ex) => {
                    console.log('parsing failed', ex)
                })
            }
            fetchData() 
        }
        ,[props.listingData]);

        useEffect(() => {
            if(cycleImages){
                setCurrentImage({index:1, data:images[1]})
                const id = setInterval(() => {
                    setCurrentImage((prevImage) => {
                        let index = prevImage.index + 1
                        if(index === images.length){index = 0} 
                        return {index:index, data:images[index]}
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
            setCurrentImage({index:0, data:images[0]})
        } 

    return(   
        <Grid key={props.listingData.listing_id} item>
        <Card className={classes.card} onMouseEnter={handleMouseOver} onMouseLeave={defaultImage}>
            
            <CardActionArea>
                <CardMedia
                    className={classes.media + (cycleImages ? ` ${classes.cycle}`: '') }
                    image={currentImage.data ? currentImage.data.url_570xN:''}
                    title="Contemplative Reptile"
                />
            </CardActionArea>
            <CardActions>
                <Link href={props.listingData.url} target="_blank" >
                    <Button size="small" color="primary">
                        Buy
                    </Button>
                </Link>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
        </Grid>
     )
    }



export default Listing
