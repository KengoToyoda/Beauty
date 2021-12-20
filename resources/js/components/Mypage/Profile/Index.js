import React ,{ useEffect, useState }from 'react';
import ReactDOM from 'react-dom';
import { ImageForm } from './Form/ImageForm';
import { MainForm } from './Form/MainForm';
import  HomeBar  from '../Nav/HomeBar';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Index(props) {
    const [stylist, setStylist] = useState(['']);
    
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
                        <ImageForm 
                            userName={stylist.name}
                            userImage={stylist.image}
                            stylistId={stylist.id}
                            onSetStylist={setStylist}
                        />
                        <MainForm 
                            onSetStylist={setStylist}
                            stylistId={stylist.id}
                            stylist={stylist}
                        />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Index;

