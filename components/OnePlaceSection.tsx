import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Fade from 'react-reveal/Fade';
import loadable from '@loadable/component';

const useStyles = makeStyles((theme) => ({
  contrastText: {
    color: theme.palette.primary.main,
  },
  root: {
    backgroundColor: theme.palette.grey[100],
  },
  hideScroll: {
    overflow: 'hidden',
  },
}));

const ExplanatoryGroup = loadable(() => import('./ExplanatoryGroup'));

const OnePlaceSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container>
        <Box pt={8} pb={8}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Fade top>
                <Typography color="textSecondary" align="center" variant="h4">
                  <Box fontFamily="Gilroy-ExtraBold">
                    Tudo o que sua imobiliária precisa
                    {' '}
                    <Box component="span" className={classes.contrastText}>
                      em um só lugar!
                    </Box>
                  </Box>
                </Typography>
              </Fade>
            </Grid>
            <Grid item xs={12} className={classes.hideScroll}>
              <ExplanatoryGroup />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default OnePlaceSection;
