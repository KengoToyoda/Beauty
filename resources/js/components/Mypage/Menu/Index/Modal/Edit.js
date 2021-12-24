import React ,{ useEffect, useState, useContext }from 'react';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';

import { MenuModalData } from "../List";
import { StylistMenu } from "../Index";

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
  
  const { setMenus } = useContext(StylistMenu);
  const { open, menuState, ImageUrl, id ,handleClose } = useContext(MenuModalData);
  const { control, handleSubmit } = useForm();
  const [imageData, setImageData] = useState([]);
  const [previwFile, setPreviwFile] = useState('');
  
  const handleFile = (e) => {
    console.log(e.target.files);
    var file = e.target.files
    if (file.length > 0){
        var imageFile = file[0];
        //送信用Data保存
        setImageData(imageFile);
        const imageInputFile = URL.createObjectURL(imageFile);
        //プレビュー用Url保存
        setPreviwFile(imageInputFile);
    } else {
        setImageData(null);
        setPreviwFile(null);
    }
  }
  
  const onSubmit = (data) => {
    const Params = new FormData();
    Params.append('_method', 'PUT');
    Params.append('image', imageData);
    Params.append('title', data['title']);
    Params.append('desc', data['desc']);
    Params.append('price', data['price']);
    Params.append('time', data['time']);
    
    axios.post(`/home/menu/${id}`, Params, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    })
    .then(response => {
        setMenus(response.data);
        handleClose();
        // alert('成功');
    })
    .catch(error => {
        console.log(error);
    })
  };
  
  
  
  return (
       <Fade in={open}>
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardMedia
              component="img"
              height="500"
              width="700"
              image={ImageUrl + menuState['image']}
              image={previwFile ? previwFile : ImageUrl + menuState['image']}
              alt={ menuState['image'] }
            />
            <label>画像を変更する場合は選択してください。</label> 
            <input
                type="file"
                accept="image/*,.png,.jpg,.jpeg,.gif"
                multiple
                name="name"
                onChange={handleFile}
            />
            <Controller
              render={({ field }) => 
                <TextField 
                  {...field} 
                  label="メニュー名"
                  fullWidth
                  margin="normal"
                />}
              name="title"
              control={control}
              defaultValue={menuState['title']}
              className="materialUIInput"
            />
            <Controller
              render={({ field }) => 
                 <TextField
                    {...field}
                    label="メニュー詳細"
                    fullWidth
                    margin="normal"
                    rows={4}
                    multiline
                    variant="outlined"
                />
                
              }
              name="desc"
              control={control}
              defaultValue={menuState['desc']}
            />
            <Controller
              render={({ field }) => 
                 <TextField
                    {...field}
                    label="料金"
                    margin="normal"
                    fullWidth
                />
                
              }
              name="price"
              control={control}
              defaultValue={menuState['price']}
            />
            <Controller
              render={({ field }) => 
                 <TextField
                    {...field}
                    label="時間"
                    margin="normal"
                    fullWidth
                />
              }
              name="time"
              control={control}
              defaultValue={menuState['time']}
            />
            <input type="submit" />
          </form>
        </Box>
      </Fade>
  );
}

export default React.forwardRef((props, ref) => <Edit {...props} forwardedRef={ref} />);


