import React from 'react'
import Grid from '@material-ui/core/Grid';

export default function ReviewRow(props) {
    return (
        <div>
            <Grid container>
                <Grid item xs={2} sm={2}>
                    <strong>{props.subject}:</strong>
                </Grid>
                <Grid item xs={4} sm={4}>
                    {props.value}
                </Grid>
            </Grid>
        </div>
    )
}
