import React ,{ useEffect, useState, useContext }from 'react';
// import { styled } from '@mui/material/styles';
// import axios from 'axios';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import { MenuModalData } from "../List";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '90vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 10,
  p: 4,
  overflow:'scroll',
};


function Show(props) {
    
  const { open, menuState, ImageUrl, id } = useContext(MenuModalData);
  
  return (
      <Fade in={open}>
        <Box sx={style}>
          <CardMedia
            component="img"
            height="500"
            width="700"
            image={ImageUrl + menuState['image']}
            alt="green iguana"
          />
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {menuState['title']}
          </Typography>
          <Typography id="transition-modal-description" >
            {menuState['desc']}
          </Typography>
          <Typography id="transition-modal-price" >
            {menuState['price']}
          </Typography>
          <Typography id="transition-modal-price" >
            {menuState['time']}
          </Typography>
        </Box>
      </Fade>
  );
}

export default React.forwardRef((props, ref) => <Show {...props} forwardedRef={ref} />);

