import React from 'react';
import 'date-fns';

import reviewRow from './ReviewRow'

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
import ReviewRow from './ReviewRow';


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



export default function Review() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
        <CardHeader className={classes.header}>
            Review
        </CardHeader>
        <CardContent>
            <h3> Personal Information</h3>
            <ReviewRow subject="Name" value="John Smith"></ReviewRow>
            <ReviewRow subject="Gender" value="Male"></ReviewRow>
            <ReviewRow subject="DoB" value="5/1/1980"></ReviewRow>
            <ReviewRow subject="Email" value="johnsmith@gmail.com"></ReviewRow>
            <ReviewRow subject="Mobile" value="0406 055 0444"></ReviewRow>
            <ReviewRow subject="Address" value="123 Test St Parramatta NSW 2122, Sydney"></ReviewRow>
            <br></br>
            <Divider/>
            <h3> Emergency Contacts</h3>
            <ReviewRow subject="Emergency Contact" value="Sarah Smith"></ReviewRow>
            <ReviewRow subject="Emergency Relation" value=" Mum"></ReviewRow>
            <ReviewRow subject="Mobile Contact" value="0410 232 4432"></ReviewRow>
            <br></br>
            <Divider/>
            <h3> Bank Details</h3>
             <ReviewRow subject="Bank Name" value="Commonwealth Bank"></ReviewRow>
            <ReviewRow subject="Account Name" value="Everyday"></ReviewRow>
            <ReviewRow subject="BSB" value="021 522"></ReviewRow>
            <ReviewRow subject="Account Number" value="0212 5212"></ReviewRow>
            <ReviewRow subject="TFN" value="023 232 122"></ReviewRow>
            <br></br>
            <Divider/>
            <h3> Superannuation Details</h3>
            <ReviewRow subject="Super Name" value="Australian Super"></ReviewRow>
            <ReviewRow subject="USI" value="021 522 211"></ReviewRow>
            <ReviewRow subject="Account Number" value="053 232 122"></ReviewRow>
        </CardContent>



      </Card>
    )
}
