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



export default function EmergencyContacts() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
        <CardHeader className={classes.header}>
            Emergency Contacts
        </CardHeader>
        <CardContent>
            <h3> Contact 1</h3>
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
                    <TextField required id="email" label="Email" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="phone" label="Mobile Phone Number" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="relation" label="Relation" />
                </Grid>
            </Grid>
            <br></br>
            <Divider></Divider>
            <h3> Contact 2</h3>
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
                    <TextField required id="email" label="Email" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="phone" label="Mobile Phone Number" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="relation" label="Relation" />
                </Grid>
            </Grid>
        </CardContent>



      </Card>
    )
}
