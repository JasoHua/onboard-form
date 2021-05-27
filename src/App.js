import React from 'react';

import PersonalDetails from './components/PersonalDetails'
import EmergencyContacts from './components/EmergencyContacts'
import PayrollDetails from './components/PayrollDetails'
import Review from './components/Review'



import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PersonalDetails></PersonalDetails>;
    case 1:
      return <EmergencyContacts></EmergencyContacts>;
    case 2:
      return <PayrollDetails></PayrollDetails>;
    case 3:
      return <Review></Review>
    default:
      return 'Unknown stepIndex';
  }
}

function getSteps() {
  return ['Employee Information', 'Emergency Contacts', 'Payroll Information', 'Review'];
}


function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === 3) return
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <Container fixed>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </Container>
      </div>
    </div>
  );
}

export default App;
