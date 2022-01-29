import React ,{ useEffect, useState }from 'react';
import axios from 'axios';
import  HomeBar  from '../../Nav/HomeBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from './List';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const StylistCatalog= React.createContext();

function Index(props) {
    const [catalogs, setCatalog] = useState([]);
    
    const value = {
      catalogs,
      setCatalog,
    };
    
    useEffect(() => {
        axios
        .get('/home/fetchCatalog')
        .then(response => {
            console.log(response.data);
            setCatalog(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    
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
                        <h1>Catalog Top</h1> 
                        <StylistCatalog.Provider value={value}>
                          <List />
                        </StylistCatalog.Provider> 
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Index;

