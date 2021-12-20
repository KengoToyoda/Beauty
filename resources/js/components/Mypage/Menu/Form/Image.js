import React, { useEffect, useState, useContext } from 'react';
import { useForm, Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { UserInputData } from "../Index";

function Image(props) {
    
    const { handleSubmit, register } = useForm();
    const { setImageUrl, setImageData} = useContext(UserInputData);
    
    const onSubmit = (data,action) => {
        if(action === 'back') {
            props.handleBack();
        } else {
            props.handleNext();
        }
        
        const file = data.image;
        if (file.length > 0){
            console.log('画像');
            var imageFile = file[0];
            //送信用Data保存
            setImageData(imageFile);
            const imageUrl = URL.createObjectURL(imageFile);
            //プレビュー用Url保存
            setImageUrl(imageUrl);
        } else {
            setImageUrl(null);
        }
    };
    return(
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="file"
                    accept="image/*,.png,.jpg,.jpeg,.gif"
                    multiple
                    {...register("image")} 
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onSubmit("back")}
                >
                    戻る
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    次へ
                </Button>
            </form>
        </Box>
        
    )
}

export default Image;
