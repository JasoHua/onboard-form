import React from 'react';
import 'date-fns';

import useStyles from './formStyles.js'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const gendersOptions = [
    {
        value: 'Select',
        label: 'Select',
      },

    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
      value: 'Other',
      label: 'Other',
    }
  ];

export default function PersonalDetails() {
    const classes = useStyles();
    const [genders, setGenders] = React.useState("Select");

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  

    const handleChange = (event) => {
        setGenders(event.target.value);
    };
    return (
        <Card className={classes.root} variant="outlined">
        <CardHeader className={classes.header}>
            Employee Information
        </CardHeader>
        <CardContent>
            <h3> Personal Details</h3>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <TextField required id="firstName" label="First Name" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField id="middleName" label="Middle Name" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="lastName" label="Last Name" />
                </Grid>
            </Grid>
            <br></br>
            <Grid container>
                <Grid item xs={12} sm={4}>
                <TextField
                    id="standard-select-currency-native"
                    select
                    label="Gender"
                    value={genders}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    >
                    {gendersOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        id="date-picker-inline"
                        label="Date of Birth"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />

                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={4}>
                </Grid>
                <Grid item xs={12} sm={4}>
                </Grid>
            </Grid>

            <br></br>
            <Divider />
            <h3> Contact Details</h3>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <TextField required id="email" label="Email" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="phone" label="Mobile Phone Number" />
                </Grid>
            </Grid>
            <br></br>

            <Divider />
            <h3> Address</h3>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <TextField fullWidth required id="email" label="Address Line 1" />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField fullWidth  id="phone" label="Address Line 2" />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <TextField  required id="email" label="Suburb" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField  required id="phone" label="State" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField  required id="phone" label="Post Code" />
                </Grid>
            </Grid>

        </CardContent>
      </Card>
    )
}
