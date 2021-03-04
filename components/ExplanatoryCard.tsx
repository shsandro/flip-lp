import {
  Box, Grid, makeStyles, Paper, Typography,
} from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import React from 'react';
import SecondTitle from './SecondTitle';

export type ExplanatoryCardProps = {
  src: string;
  title: string;
  secondTitle: string;
  description: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    transition: theme.transitions.create(['margin-top', 'box-shadow'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      marginTop: -10,
      boxShadow: theme.shadows[4],
    },
  },
  textSize: {
    height: theme.spacing(10),
    [theme.breakpoints.only('xs')]: {
      height: '100%',
    },
  },
}));

const ExplanatoryCard = ({
  src,
  title,
  secondTitle,
  description,
}: ExplanatoryCardProps) => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Fade bottom>
              <img alt={src} src={src} width="100%" height="190px" />
            </Fade>
          </Grid>
          <Grid item xs={12} className={classes.textSize}>
            <Fade bottom>
              <Typography variant="h5" color="textSecondary">
                <Box fontFamily="Gilroy-ExtraBold">{title}</Box>
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade bottom>
              <Grid container>
                <Grid item xs={6}>
                  <SecondTitle>
                    {secondTitle}
                  </SecondTitle>
                </Grid>
              </Grid>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade bottom>
              <Typography variant="body1" color="textSecondary">
                {description}
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ExplanatoryCard;
