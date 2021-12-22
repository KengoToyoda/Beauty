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


function Edit(props) {
    
  const { open, menuState, handleOpen, ImageUrl } = useContext(MenuModalData);
  
  return (
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-price" >
            {menuState['time']}
          </Typography>
        </Box>
      </Fade>
  );
}

export default Edit;

