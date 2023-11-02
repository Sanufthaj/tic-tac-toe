import { Card, Grid, Typography } from "@mui/material";
import React from "react";

function Scoreboard({ scores, Xplaying }) {
  return (
    <div>
      <Card sx={{ py: 3, px: 10, mt:5 }} elevation={6}>
        <Grid container spacing={7} >
          <Grid item >
            <Typography variant="h3" color={Xplaying && "blue"} fontWeight={700} >X-{scores.xScore}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" color={!Xplaying && "red"} fontWeight={700} >O-{scores.oScore}</Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Scoreboard;
