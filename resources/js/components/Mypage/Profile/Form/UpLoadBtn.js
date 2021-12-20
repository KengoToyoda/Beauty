import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';

const ImageUpIcon = styled(AddIcon)`
    position:absolute;
    bottom:0;
    right:0;
    color:#fff;
    border-radius:25px;
    border:2px solid #fff;
    background-color: #FF0461;
`

const UpLoadInput = styled.input`
    display:none;
`

export const UpLoadBtn = (props) => {
    
  return (
    <label htmlFor='upload-styist-img-button'>
        <UpLoadInput
            accept="image/*,.png,.jpg,.jpeg,.gif"
            id='upload-styist-img-button'
            multiple
            type="file"
            onChange={props.onChangeFile}
        />
        <ImageUpIcon/>
    </label>
  );
};