import React ,{ useEffect, useState }from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import  HomeBar  from './Nav/HomeBar';

export const StylistData = React.createContext();

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Home(props) {
    
    return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <HomeBar />
          </Item>
        </Grid>
        <Grid item xs={9}>
            <Item>
                <h1>Mypage Top</h1>  
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;

