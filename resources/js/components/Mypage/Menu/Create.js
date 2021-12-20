import React ,{ useEffect, useState }from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

import Basic from "./Form/Basic";
import Image from "./Form/Image";
import Confirm from "./Form/Confirm";

function Create() {
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
    const handleReset = () => {
        setActiveStep(0);
    };
    
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
    );
}

export default Create;

