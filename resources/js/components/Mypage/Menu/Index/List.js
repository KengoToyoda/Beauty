import React ,{ useEffect, useState, useContext }from 'react';
import { styled } from '@mui/material/styles';
// import axios from 'axios';
import { createTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { StylistMenu } from "./Index";
import MenuModal from './Modal/MenuModal';

const options = [
  '詳細',
  '編集',
];

const ITEM_HEIGHT = 48;

const MenuBox = styled(Box)`
    width: 100%;
    display: flex;
    flex-wrap:wrap;
`;

const MenuCard = styled(Card)`
    max-width: 30%;
    margin: 20px 1.5%;
    padding-bottom:20px;
`;

const MenuTextFiled = styled(CardContent)`
    text-align:left;
    max-height: 200px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    padding-bottom: 0!important;
`;

export const MenuModalData = React.createContext();

function List(props) {
    const { menus, setMenus } = useContext(StylistMenu);
    const ImageUrl = "https://beauty-hair.s3.us-east-2.amazonaws.com/menu/";
    
    const [open, setOpen] = useState(false);
    const [menuState, setMenuState] = useState('');
    console.log(menuState);
    const handleOpen = (option) => {
        // console.log(menuInfo);
        console.log(option);
        // setMenuState(menuInfo);
        // setOpen(true);
        // setAnchorEl(null);
    }
    const handleClose = () => setOpen(false);
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const anchorElOpen = Boolean(anchorEl);
    console.log(anchorElOpen);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const anchorElClose = () => {
         setAnchorEl(null);
    };
    const value = {
       open, 
       setOpen,
       menuState,
       setMenuState,
       handleOpen,
       handleClose,
       ImageUrl
    };
    
    return (
            <div>
                <MenuBox>
                    {menus.map((menu) => {
                        const menuInfo = {
                            'id': menu.id,
                            'title': menu.title,
                            'desc': menu.desc,
                            'price': menu.price,
                            'time': menu.time,
                            'image': menu.image,
                        }
                        return (
                            <MenuCard key={menu.id}>
                                <CardHeader
                                    action={
                                        <div>
                                            <IconButton
                                                aria-label="more"
                                                id="long-button"
                                                aria-controls="long-menu"
                                                aria-expanded={anchorElOpen ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleClick}
                                            >
                                                <MoreVertIcon />
                                            </IconButton>
                                            <Menu
                                                id="long-menu"
                                                MenuListProps={{
                                                  'aria-labelledby': 'long-button',
                                                }}
                                                anchorEl={anchorEl}
                                                open={anchorElOpen}
                                                onClose={anchorElClose}
                                                PaperProps={{
                                                  style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '20ch',
                                                  },
                                                }}
                                            >
                                                {options.map((option) => {
                                                    // menuInfo['content'] = option; 
                                                    // console.log(menuInfo);
                                                    return(
                                                        <MenuItem 
                                                            key={option} 
                                                            onClick={() => handleOpen(option)}
                                                        >
                                                        {option}
                                                        </MenuItem>
                                                    )
                                                })}
                                            </Menu>
                                          </div>
                                      }
                                      title={menu.title}
                                />
                                <CardMedia
                                  component="img"
                                  height="194"
                                  image={ImageUrl + menu.image}
                                  alt={menu.image}
                                />
                                <MenuTextFiled>
                                    <Typography variant="body2" color="text.secondary">
                                        {menu.desc}
                                    </Typography>
                                </MenuTextFiled>
                                
                            </MenuCard>
                        )
                    })}
                </MenuBox>
                <MenuModalData.Provider value={value}>
                    <MenuModal />
                </MenuModalData.Provider >
            </div>
        )
    }

export default List;

