import React ,{ useEffect, useState , useContext }from 'react';
import { styled } from '@mui/material/styles';
// import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';

import Show from './Show';
import Edit from './Edit';

import { MenuModalData } from "../List";

function MenuModal(props) {
  const { open, handleClose, option,} = useContext(MenuModalData);
    
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      { option == '詳細' ? <Show/> : <Edit /> }
    </Modal>
  );
}

export default React.forwardRef((props, ref) => <MenuModal {...props} forwardedRef={ref} />);


