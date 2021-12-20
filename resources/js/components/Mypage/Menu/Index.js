import React ,{ useEffect, useState }from 'react';
import ReactDOM from 'react-dom';
import  HomeBar  from '../Nav/HomeBar';
import MenuCreate from './Create';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const UserInputData = React.createContext();

function Index(props) {
        const [currentState, setCurrentState] = React.useState({});
    const [imageUrl, setImageUrl] = useState();
    const [imageData, setImageData] = useState();
    const [stylist, setStylist] = useState();
    
    useEffect(() => {
        axios
        .get('/home/fetchStylist')
        .then(response => {
            setStylist(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    
    const value = {
        currentState,
        setCurrentState,
        imageUrl,
        setImageUrl,
        imageData,
        setImageData,
        stylist,
        setStylist
    };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Item>
                    <HomeBar />
                  </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <h1>Menu Top</h1> 
                        <UserInputData.Provider value={value}>
                            <MenuCreate />
                        </UserInputData.Provider>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Index;

