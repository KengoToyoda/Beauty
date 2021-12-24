import React ,{ useEffect, useState }from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HomeBar from '../../Nav/HomeBar';
import List from './List';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const StylistMenu= React.createContext();

function Index() {
    // const [stylist, setStylist] = useState();
    const [menus, setMenus] = useState([]);

    const value = {
      menus,
      setMenus
    };
    
    useEffect(() => {
        axios
        .get('/home/fetchMenu')
        .then(response => {
            setMenus(response.data);
            console.log(response.data)
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
                <h1>Menu List</h1> 
                <StylistMenu.Provider value={value}>
                  <List />
                </StylistMenu.Provider> 
              </Item>
          </Grid>
        </Grid>
      </Box>
  );
}

export default Index;

