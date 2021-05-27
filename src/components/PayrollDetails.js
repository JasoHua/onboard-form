import React from 'react';
import 'date-fns';


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


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    header: {
        background: "rgb(25,118,210)",
        color: "white",
        fontSize: "1.2em"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });



export default function PayrollDetails() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
        <CardHeader className={classes.header}>
            Payroll Details
        </CardHeader>
        <CardContent>
            <h3> Bank Details</h3>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth required id="bankName" label="Bank Name" />
                </Grid>
                <Grid item xs={12} sm={2}>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth required id="middleName" label="Account Name" />
                </Grid>
            </Grid>
            <br></br>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <TextField required id="email" label="BSB" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="phone" label="Account Number" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="relation" label="TFN" />
                </Grid>
            </Grid>
            <br></br>
            <Divider></Divider>
            <h3> Superannuation Details</h3>

            <Grid container>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth required id="fundName" label="Fund Name" />
                </Grid>
                <Grid item xs={12} sm={1}>

                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField  required id="fundABN" label="Fund ABN" />
                </Grid>
                <Grid item xs={12} sm={1}>

                </Grid>

                <Grid item xs={12} sm={2}>
                    <TextField  required id="use" label="USI" />

                </Grid>

                <Grid item xs={12} sm={2}>
                </Grid>
            </Grid>
            <br></br>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <TextField  fullWidth id="email" label="Account Name (if applicable)" />
                </Grid>

                <Grid item xs={12} sm={2}></Grid>
        
                <Grid item xs={12} sm={2}>
                    <TextField required id="phone" label="Account Number" />
                </Grid>
            </Grid>
        </CardContent>



      </Card>
    )
}
