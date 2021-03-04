import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Fade from "react-reveal/Fade";
import React from "react";

const buttons = [
  <FacebookIcon />,
  <LinkedInIcon />,
  <WhatsAppIcon />,
  <InstagramIcon />,
];

const useStyles = makeStyles((theme) => ({
  textContrast: {
    color: theme.palette.primary.main,
  },
  textSize: {
    fontSize: "21px",
  },
  whiteText: {
    color: theme.palette.common.white,
  },
  circle: {
    backgroundColor: theme.palette.primary.main,
    width: "350vw",
    height: "350vw",
    position: "absolute",
    borderRadius: "70%",
    top: "10%",
    zIndex: -1,
  },
  footerBg: {
      justifyContent: 'center',
      height: 100,
      overflow: 'hidden',
      position: 'relative',
      [theme.breakpoints.down('sm')]:{
          height: 175,
      }
  },
}));
const FooterSection = () => {
  const classes = useStyles();
  return (
    <section>
      <Container>
        <Box pt={8}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Fade left>
                    <Typography variant="h5" color="textSecondary">
                      <Box fontFamily="Gilroy-ExtraBold">
                        Dúvidas?{" "}
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
                      Clique aqui para entrar em contato através do whats,
                      nossos consultores estão prontos para atendê-lo
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
                        Quero{" "}
                        <Box component="span" className={classes.textContrast}>
                          agendar uma apresentação.
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
                      uma apresentação.
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
                    >
                      Agendar
                    </Button>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box pt={10}>
        <Grid
          container
          alignItems="center"
          alignContent="center"
          className={classes.footerBg}
        >
            <div className={classes.circle} />
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={10} sm={6} md={4} lg={3} xl={2}>
                <Fade left>
                  <Typography variant="body1" className={classes.whiteText}>
                    <Box component="span" pr={1}>
                      <img
                        alt="logo-flip"
                        src="/flip-logo_branca.svg"
                        width="15%"
                      />
                    </Box>
                    Transforme leads em clientes!
                  </Typography>
                </Fade>
              </Grid>
              <Fade right>
                <Grid item xs={12} sm="auto">
                  {buttons.map((button) => {
                    return (
                      <IconButton className={classes.whiteText}>
                        {button}
                      </IconButton>
                    );
                  })}
                </Grid>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default FooterSection;
