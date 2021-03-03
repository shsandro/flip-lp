import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ExplanatoryGroup from "../components/ExplanatoryGroup";

const useStyles = makeStyles((theme) => ({
  contrastText: {
    color: theme.palette.primary.main,
  },
}));
const playground = () => {
  const classes = useStyles()
  return (
    <div />
  );
};

export default playground;
