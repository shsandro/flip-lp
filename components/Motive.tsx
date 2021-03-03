import { Grid, Typography } from "@material-ui/core";
import React from "react";

export type MotiveProps = {
  text: string;
  icon: React.ReactNode;
};

const Motive = ({ icon, text }: MotiveProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs="auto">
        {icon}
      </Grid>
      <Grid item xs={8}>
        <Typography color="textSecondary">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default Motive;
