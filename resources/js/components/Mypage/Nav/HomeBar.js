import React ,{ useEffect, useState }from 'react';
import ReactDOM from 'react-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import {Link} from 'react-router-dom';


function HomeBar(props) {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openCatalog, setOpenCatalog] = React.useState(false);

    const handleClickMenu = () => {
        setOpenMenu(!openMenu);
    };
    const handleClickCatalog = () => {
        setOpenCatalog(!openCatalog);
    };
    
    return (
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText>
                <Link to="/home/profile" >プロフィール</Link>
            </ListItemText>
          </ListItemButton>
          
          <ListItemButton onClick={handleClickMenu}>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText>
                <Link to="/home/menu" >メニュー</Link>
            </ListItemText>
            {openMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText  >
                    <Link to="/home/menu/create">メニュー作成</Link>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>
          
          <ListItemButton onClick={handleClickCatalog}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>
                <Link to="/home/catalog">カタログ</Link>
            </ListItemText>
            {openCatalog ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCatalog} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText  >
                    <Link to="/home/catalog/create">カタログ作成</Link>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
    );
}

export default HomeBar;

