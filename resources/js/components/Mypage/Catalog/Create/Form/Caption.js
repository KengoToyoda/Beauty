import React, { useEffect, useState, useContext } from 'react';
import { useForm, Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StylistCatalog } from "../Create";
import TextField from '@mui/material/TextField';

function Caption(props) {
    const { handleSubmit, registe, control } = useForm();
    const { setCaption } = useContext(StylistCatalog);
    
    const onSubmit = (data) => {
        setCaption(data);
        props.handleNext();
    };
    return(
        <Box>
            <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 30}}>
                <Controller
                    control={control}
                    name="caption"
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="カタログ詳細を入力"
                            fullWidth
                            margin="normal"
                            placeholder="#グレージュカラー"
                        />
                    )}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.handleBack}
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

export default Caption;
