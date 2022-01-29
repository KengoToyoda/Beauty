import React, { useEffect, useState, useContext } from 'react';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { UserInputData } from "../Create";

var item = {
    'title': 'メニュー名',
    'desc': 'メニュー詳細',
    'price': '料金',
    'time': '所要時間',
}

const ImageContiner = styled.div`
    height: 15rem;
    width:100%;
    background-image: url(${props => props.imageurl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position:center;
`;


function Confirm(props) {
    const { currentState, imageFileUrl, imageData } = useContext(UserInputData);
    const navigate = useNavigate();
    
    const onSubmit = () => {
        const Params = new FormData();
        Params.append('image', imageData);
        Params.append('title', currentState['Menu']['title']);
        Params.append('desc', currentState['Menu']['desc']);
        Params.append('price', currentState['Menu']['price']);
        Params.append('time', currentState['Menu']['time']);
        
        axios.post('/home/menu/', Params, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            navigate('/home/menu');
        })
        .catch(error => {
            console.log(error);
        })
    };
    // console.log(imageData);
    const inputDataLists = [];
    var id = 0;
    for ( var k in currentState) {
        for ( var v in currentState[k]) {
            var value = ''
            if (currentState[k][v] === true) {
                value = 'チェックしました';
            } else if (currentState[k][v] === false) {
                value = 'チェックしていません';
            } else if (currentState[k][v] === '') {
                value = '未入力';
            } else {
                value = currentState[k][v];
            }
            inputDataLists.push(
                {
                    "id": id,
                    "name": item[v],
                    "value": value
                }
            );
            id++;
        }
    }
    return(
        <Box>
            <TableContainer component={Paper}>
                <Table aria-label="Customer Input Data">
                    <TableHead>
                        <TableRow>
                            <TableCell>項目</TableCell>
                            <TableCell>入力内容</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            inputDataLists.map(function(elem) {
                                return (
                                    <TableRow key={elem.id}>
                                    <TableCell style={{ width: 200 , textAlign: 'center' }}>
                                        {elem.name}
                                    </TableCell>
                                    { elem.value ? <TableCell>{elem.value}</TableCell> : <TableCell>None</TableCell> }
                                    </TableRow>
                                )
                            })
                        }
                        <TableRow >
                        <TableCell style={{ width: 200 , textAlign: 'center' }}>画像</TableCell>
                        <ImageContiner imageurl={imageFileUrl}></ImageContiner>
                        </TableRow>
                    </TableBody>
                    
                </Table>
            </TableContainer>
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
