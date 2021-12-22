import React, { useEffect, useState, useContext } from 'react';
import { useForm, Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import { UserInputData } from "../Create";

function Basic(props) {
    const { control, handleSubmit } = useForm();
    const { currentState, setCurrentState } = useContext(UserInputData);
    const onSubmit = (data) => {
        props.handleNext();
        setCurrentState({...currentState, "Menu": data });
    };
    return (
            <Box sx={{ width: '100%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="title"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="メニュー名"
                                fullWidth
                                margin="normal"
                                placeholder="[新規]カット＋カラー"
                            />
                        )}
                    />
                    <Controller
                    control={control}
                        name="desc"
                        render={({ field }) => (
                            <Tooltip
                                title="自由に記入することができます"
                                placement="top-start"
                                arrow
                            >
                                <TextField
                                    {...field}
                                    label="メニュー詳細"
                                    fullWidth
                                    margin="normal"
                                    rows={4}
                                    multiline
                                    variant="outlined"
                                    placeholder="メニューに関する詳細を記述ください"
                                />
                            </Tooltip>
                        )}
                    />
                    <Controller
                        control={control}
                        name="price"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="料金"
                                margin="normal"
                                placeholder="¥5000"
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="time"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="所用時間"
                                fullWidth
                                margin="normal"
                                placeholder="60"
                            />
                        )}
                    />
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

export default Basic
