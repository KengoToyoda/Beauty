import React, { useEffect, useState, useContext } from 'react';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';
import Slider from "react-slick";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { StylistCatalog } from "../Create";

const TextCard = styled(CardContent) `
    padding: 40px 20px 20px 20px;
`
function Confirm(props) {
    const { selectedImageList, stylist, caption, images } = useContext(StylistCatalog);
    const navigate = useNavigate();
    
    const onSubmit = () => {
        const Params = new FormData();
        for (let i = 0; i < images.length; i++) {
            Params.append(`images[${i}]` , images[i]);
        }
        Params.append('caption', caption['caption']);
        Params.append('imageLenght', images.length);
        
        axios.post('/home/catalog/', Params, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            navigate('/home/catalog');
        })
        .catch(error => {
            console.log(error);
        })
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
            <div>
                <Slider {...settings}>
                    {selectedImageList}
                </Slider>
            </div>
            <TextCard>
                <Typography variant="h5" component="div">
                  {caption['caption']}
                </Typography>
            </TextCard>
            <Button variant="contained" color="primary" onClick={props.handleBack}>
                戻る
            </Button>
            <Button variant="contained" color="primary" onClick={onSubmit}>
                送信
            </Button>
        </Box>
    )
}

export default Confirm;
