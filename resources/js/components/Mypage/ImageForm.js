import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { UpLoadBtn } from './UpLoadBtn';
import axios from 'axios';


const ImageContainer = styled.div`
    background-image: url(https://beauty-hair.s3.us-east-2.amazonaws.com/stylist/${props => props.imagedata});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin:0 auto;
    position:relative;
`;

export const ImageForm = (props) => {
    const [postFileData, setPostFileData] = useState('');
    
    const changeUploadFile = (e) => {
        
        let fileData = e.target.files[0]
        event.target.value = '';
        
        const Params = new FormData();
        Params.append(
            'image', fileData
        );
        Params.append('_method', 'PUT');
        axios.post(`/home/mainImage/${props.stylistId}`, Params, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.log(response.data)
            props.onSetStylist(response.data);
            alert('成功')
        })
        .catch(error => {
            console.log(error);
        })
    };
    
    return (
        <section className="mp_intro">
                <div className="mp-user-info">
                    <h1 className="mp-user-name bold">
                        { props.userName }さん
                    </h1>
                    <ImageContainer imagedata={props.userImage} >
                        <UpLoadBtn 
                            onChangeFile={changeUploadFile}  
                        />
                    </ImageContainer>
                </div>
        </section>
    )
}
