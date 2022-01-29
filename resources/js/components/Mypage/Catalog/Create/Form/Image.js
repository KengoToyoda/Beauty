import React, { useEffect, useState, useContext } from 'react';
import { useForm, Controller } from "react-hook-form";
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StylistCatalog } from "../Create";
import ImageItem from "./ImageItem";


function Image(props) {
    const { handleSubmit } = useForm();
    const { images, setImages, selectedImageList, setSelectedImageList} = useContext(StylistCatalog);
    
    const handleFiles = (e) => {
        
        let files = e.target.files
        setImages(files);
        setSelectedImageList(null);
        
        let imageDatas = [];
        if (files.length > 0){
            for (let i = 0; i < files.length; i++) {
                let imageData =  files[i];
                console.log(imageData)
                imageDatas.push(imageData);
                setImages(imageDatas)
                
                let imageUrl = URL.createObjectURL(files[i]);
                let NewSelectedImageList = selectedImageList;
                NewSelectedImageList.push(
                    <ImageItem
                        key={i}
                        id={i}
                        name={files[i].name}
                        file={imageUrl}
                    />
                );
                setSelectedImageList( NewSelectedImageList );
                NewSelectedImageList = null;
            }
        } else {
            setSelectedImageList(null)
        }
        
        if(selectedImageList.length > 0){
            event.target.value = "";
        }
    }
    
    const onSubmit = (data) => {
        props.handleNext();
    };
    
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    return(
        <Box>
            <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 30}}>
                <input
                type="file"
                accept="image/*,.png,.jpg,.jpeg,.gif"
                multiple
                name="image"
                onChange={handleFiles}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    次へ
                </Button>
                <Slider {...settings}>
                    {selectedImageList}
                </Slider>
                
            </form>
            
        </Box>
    )
}

export default Image;
