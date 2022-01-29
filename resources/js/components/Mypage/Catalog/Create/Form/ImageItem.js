import React, { useEffect, useState, useContext } from 'react';
import { useForm, Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StylistCatalog } from "../Create";
import styled from "styled-components";

const ImageContainer = styled.div`
    background-image: url(${props => props.imagedata});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    width: 400px;
    height: 300px;
    border: 2px solid #fff;
    margin:0 auto;
    position:relative;
`;

function ImageItem(props) {
    return(
        <ImageContainer 
            imagedata={props.file} 
            alt={props.name}
        />
    )
}

export default ImageItem;
