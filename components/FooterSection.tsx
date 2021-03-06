import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Fade from 'react-reveal/Fade';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GoToSignUpType } from '../pages';

type SocialNetworks = {
  icon: React.ReactNode;
  link: string;
  label: string;
};

const socialNetworks: SocialNetworks[] = [
  {
    icon: <FacebookIcon />,
    link: 'https://facebook.com/crmflip',
    label: 'Facebook',
  },
  {
    icon: <InstagramIcon />,
    link: 'https://instagram.com/crmflip',
    label: 'Instagram',
  },
  // { icon: <LinkedInIcon />, link: "https://LinkedIn.com/", label: "LinkedIn" },
  {
    icon: <WhatsAppIcon />,
    link:
      'https://api.whatsapp.com/send?phone=5544998180537&text=Ol%C3%A1%20Andr%C3%A9%2C%20visitei%20a%20sua%20p%C3%A1gina%20e%20gostaria%20de%20entender%20melhor%20como%20eu%20automatizo%20o%20processo%20dos%20meus%20leads',
    label: 'WhatsApp',
  },
];

const useStyles = makeStyles((theme) => ({
  textContrast: {
    color: theme.palette.primary.main,
  },
  textSize: {
    fontSize: '21px',
  },
  whiteText: {
    color: theme.palette.common.white,
  },
  circle: {
    backgroundColor: theme.palette.primary.main,
    width: '350vw',
    height: '350vw',
    position: 'absolute',
    borderRadius: '70%',
    top: 0,
    zIndex: -1,
  },
  footerBg: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    height: theme.spacing(11),
    [theme.breakpoints.only('xs')]: {
      height: theme.spacing(19),
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: theme.spacing(15),
    },
  },
  imgLogo: {
    marginTop: '0.4%',
  },
  removeScroll: {
    overflow: 'hidden',
  },
}));
const FooterSection = ({ goToSignUp }: GoToSignUpType) => {
  const classes = useStyles();
  const theme = useTheme();
  const isCellphone = useMediaQuery(theme.breakpoints.down('xs'));
  const navigateTo = (link: string) => {
    const win = window.open(link, '_blank');
    win.focus();
  };
  return (
    <section>
      <Box pt={8}>
        <Container>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Fade left>
                    <Typography variant="h5" color="textSecondary">
                      <Box fontFamily="Gilroy-ExtraBold">
                        D??vidas?
                        {' '}
                        <Box component="span" className={classes.textContrast}>
                          vamos conversar!
                        </Box>
                      </Box>
                    </Typography>
                  </Fade>
                </Grid>
                <Grid item xs={12}>
                  <Fade left>
                    <Typography
                      color="textSecondary"
                      className={classes.textSize}
                    >
                      Clique aqui para entrar em contato atrav??s do WhatsApp,
                      nossos consultores est??o prontos para atend??-lo.
                    </Typography>
                  </Fade>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Fade left>
                    <Button
                      size="large"
                      color="primary"
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        navigateTo(
                          "https://api.whatsapp.com/send?phone=5544984492772&text=Ol%C3%A1%20%C3%89rica%2C%20visitei%20a%20sua%20p%C3%A1gina%20e%20gostaria%20de%20entender%20melhor%20como%20eu%20automatizo%20o%20processo%20dos%20meus%20leads"
                        );
                      }}
                    >
                      Conversar
                    </Button>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Fade right>
                    <Typography variant="h5" color="textSecondary">
                      <Box fontFamily="Gilroy-ExtraBold">
                        Quero
                        {' '}
                        <Box component="span" className={classes.textContrast}>
                          agendar uma apresenta????o.
                        </Box>
                      </Box>
                    </Typography>
                  </Fade>
                </Grid>
                <Grid item xs={12}>
                  <Fade right>
                    <Typography
                      color="textSecondary"
                      className={classes.textSize}
                    >
                      Informe os seus dados, entraremos em contato para agendar
                      uma apresenta????o.
                    </Typography>
                  </Fade>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Fade right>
                    <Button
                      size="large"
                      color="primary"
                      variant="contained"
                      fullWidth
                      onClick={goToSignUp}
                    >
                      Agendar
                    </Button>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box pt={10} className={classes.removeScroll}>
        <Fade bottom>
          <Grid
            container
            alignItems="center"
            alignContent="center"
            className={classes.footerBg}
          >
            <div className={classes.circle} />
            <Container>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item xs={8} sm={4}>
                    <Grid container justify="center" alignItems="center">
                      <Grid item xs={12} md={9} lg={8}>
                        <Grid container justify="center" spacing={1} alignItems="center">
                          {!isCellphone && (
                            <Grid item sm={2} md={3} className={classes.imgLogo}>
                              <img alt="" src="/flip-logo_branca.svg" width="100%" height="100%" />
                            </Grid>
                          )}
                          <Grid item xs="auto">
                            <Typography variant="caption" className={classes.whiteText}>
                              Transforme Leads em Clientes!
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs="auto">
                        <Box pl={isCellphone ? 0 : 2}>
                          <Grid container spacing={1}>
                            <Grid item xs="auto">
                              {socialNetworks.map((network) => (
                                <IconButton
                                  edge="start"
                                  key={network.label}
                                  title={network.label}
                                  className={classes.whiteText}
                                  onClick={() => {
                                    navigateTo(network.link);
                                  }}
                                >
                                  {network.icon}
                                </IconButton>
                              ))}
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="center" variant="body2" className={classes.whiteText}>
                      Avenida Tamandar??, Ed. Parque Avenue, 30 sala 04
                      Centro, Maring?? - PR.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Fade>
      </Box>

    </section>
  );
};

export default FooterSection;
