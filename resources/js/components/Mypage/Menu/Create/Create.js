import React ,{ useEffect, useState }from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';

import Basic from "./Form/Basic";
import Image from "./Form/Image";
import Confirm from "./Form/Confirm";
import  HomeBar  from '../../Nav/HomeBar';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const UserInputData = React.createContext();

function Create() {
    const [currentState, setCurrentState] = React.useState({});
    const [imageUrl, setImageUrl] = useState();
    const [imageData, setImageData] = useState();
    const [stylist, setStylist] = useState();
    
    useEffect(() => {
        axios
        .get('/home/fetchStylist')
        .then(response => {
            setStylist(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    
    const value = {
        currentState,
        setCurrentState,
        imageUrl,
        setImageUrl,
        imageData,
        setImageData,
        stylist,
        setStylist
    };
    const getSteps = () => {
        return [
            'メニュー項目入力',
            'メニュー画像選択',
            '入力内容確認'
        ];
    }
    
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    // const handleReset = () => {
    //     setActiveStep(0);
    // };
    
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <Basic handleNext={handleNext} />;
            case 1:
                return <Image handleNext={handleNext} handleBack={handleBack} />;
            case 2:
                return  <Confirm handleBack={handleBack} />;
            default:
                return 'Unknown stepIndex';
        }
    }

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
                        <h1>Menu Create</h1> 
                        <UserInputData.Provider value={value}>
                            <Box sx={{ width: '100%' }}>
                                <Stepper alternativeLabel activeStep={activeStep}>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepButton>{label}</StepButton>
                                        </Step>
                                    ))}
                                </Stepper>
                                { getStepContent(activeStep, handleNext, handleBack)}
                            </Box>
                        </UserInputData.Provider>
                    </Item>
                </Grid>
            </Grid>
        </Box>
        
    );
}

export default Create;

