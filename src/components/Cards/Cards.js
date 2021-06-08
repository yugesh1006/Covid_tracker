import React from 'react';
import { Card,CardContent,Typography, Grid } from '@material-ui/core';
import "./cards.css";
import CountUp from "react-countup";

function Cards({data:{confirmed,recovered,deaths,lastUpdate}}) {
    if(!confirmed){
        return 'loading...';
    } 
    return (
        <div className="cards_container">
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className="card card_infected">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card card_recovered">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                        <Typography variant="h5"> 
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card card_deaths">
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"> 
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
