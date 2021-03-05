/* eslint-disable max-len */
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Gears from './Gears';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GoToSignUpType } from '../pages';

const useStyles = makeStyles((theme) => ({
  gridImage: {
    position: 'relative',
    marginLeft: '-15%',
    top: -1,
  },
  contrastText: {
    color: theme.palette.primary.main,
  },
  textSize: {
    fontSize: '21px',
  },
  fullHeight: {
    flex: '1 0 auto',
  },
  gears: {
    position: 'absolute',
    marginTop: '-85%',
    zIndex: -1,
    transform: 'rotate(4deg)',
  },
  flexContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-30%',
    },
  },
  imgSize: {
    width: '140%',
    objectFit: 'cover',
    height: '100%',
    [theme.breakpoints.up('xl')]: {
      width: '150%',
    },
  },
}));

const ShowcaseSection = ({ goToSignUp }:GoToSignUpType) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownXs = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <section>
      <Container>
        <Box pb={8}>
          <Grid container direction={isDownMd ? 'column-reverse' : 'row'}>
            <Grid item sm={12} md={5} className={classes.flexContainer}>
              <Grid
                container
                alignContent="space-between"
                className={classes.fullHeight}
              >
                <Grid item xs={3} sm={2} md={4} lg={3}>
                  <Box pt={8}>
                    <img alt="logo" src="/flip-logo.svg" height="100%" width="100%" />
                  </Box>
                </Grid>
                <Grid item md={9} lg={10}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Typography variant="h3" color="textSecondary">
                        <Box fontFamily="Gilroy-ExtraBold" pt={6}>
                          Sua imobiliária
                          <br />
                          <Box
                            component="span"
                            className={classes.contrastText}
                          >
                            realmente digital!
                          </Box>
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        color="textSecondary"
                        className={classes.textSize}
                      >
                        Seu objetivo é vender e alugar mais? Ajudamos você a fazer mais negócios!
                        No entendimento, como imobiliaristas, essa chamada convence mais a saber mais sobre o produto.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        fullWidth
                        onClick={goToSignUp}
                      >
                        Saiba mais
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12} md={7} className={classes.gridImage}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <picture>
                    <source type="image/webp" src={isDownXs ? '/flip-converte-leads-em-clientes-small.webp' : '/flip-converte-leads-em-clientes.webp'} className={classes.imgSize} />
                    {/* <img alt="Flip converte leads em clientes" src={isDownXs ? '/flip-converte-leads-em-clientes-small.png' : '/flip-converte-leads-em-clientes.png'} className={classes.imgSize} /> */}
                  </picture>
                </Grid>
                <Grid item xs={4} style={{ position: 'relative' }}>
                  <div className={classes.gears}>
                    <Fade>
                      <Gears strokeWidth={0.1} />
                    </Fade>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default ShowcaseSection;
