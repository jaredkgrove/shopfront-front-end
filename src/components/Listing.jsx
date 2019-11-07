import React, { useState, useEffect, useRef } from "react";
// import Link from 'react'
import fetchJsonp from 'fetch-jsonp'


    const Listing = (props) => {
        const [images, setImages] = useState([]);
        const [currentImage, setCurrentImage] = useState({index:-1, data:{}})
        const [cycleImages, setCycleImages] = useState(false)
        const imgTag = useRef()


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

        const renderImage = () => {
            if(currentImage){
                    return <img src={currentImage.data.url_570xN} ref={imgTag} className={cycleImages ? "cycle" : "image"} onMouseEnter={handleMouseOver} onMouseLeave={defaultImage} alt="" style={{float:'left', clear:'both', width:'300px', opacity:'1', transition: 'opacity 500ms 500ms'}}/>

            }
        }
    return(   
        <div className='listing-container'>
            <a href={props.listingData.url} target="_blank" style={{float:'left', clear:'both'}}>{props.listingData.title}</a>
            {renderImage()}
        </div>
     )
    }



export default Listing
