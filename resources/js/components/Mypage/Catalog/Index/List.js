import React ,{ useEffect, useState, useContext }from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import { StylistCatalog } from "./Index";

function List(props) {
    const { catalogs } = useContext(StylistCatalog);
    
    return (
        <ImageList sx={{ width: 500, height: 450 }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">December</ListSubheader>
            </ImageListItem>
            {catalogs.map((catalog) => (
                <ImageListItem key={catalog.id}>
                  <img
                    src={`https://beauty-hair.s3.us-east-2.amazonaws.com/catalog/${catalog.images[0].image}`}
                    // srcSet={`${catalog.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    // alt={catalog.title}
                    loading="lazy"
                    />
                    <ImageListItemBar
                        title={catalog.caption}
                        // subtitle={catalog.author}
                    //     actionIcon={
                    //     <IconButton
                    //         sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    //         aria-label={`info about ${catalog.title}`}
                    //      >
                    //     <InfoIcon />
                    //   </IconButton>
                    // }
                    />
                </ImageListItem>
             ))}
        </ImageList>
        
        )
        
        
        
        
    }

// export default List;
export default React.forwardRef((props, ref) => <List {...props} forwardedRef={ref} />);

