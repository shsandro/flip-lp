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
    width: "100%",
    height: '250%',
    position: "absolute",
    borderRadius: '70%',
    top: "10%",
    left: 0,
    right: 0,
    zIndex: -1,
  },
}));
const playground = () => {
  const classes = useStyles();
  return (
    <section>
      <Container>
        <Box pt={8}>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h5" color="textSecondary">
                    <Box fontFamily="Gilroy-ExtraBold">
                      Dúvidas?{" "}
                      <Box component="span" className={classes.textContrast}>
                        vamos conversar!
                      </Box>
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    color="textSecondary"
                    className={classes.textSize}
                  >
                    Clique aqui para entrar em contato através do whats, nossos
                    consultores estão prontos para atendê-lo
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    Conversar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h5" color="textSecondary">
                    <Box fontFamily="Gilroy-ExtraBold">
                      Quero{" "}
                      <Box component="span" className={classes.textContrast}>
                        agendar uma apresentação.
                      </Box>
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    color="textSecondary"
                    className={classes.textSize}
                  >
                    Informe os seus dados, entraremos em contato para agendar
                    uma apresentação.
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    Agendar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box pt={10}>
        <Grid container alignItems="center" style={{ position: "relative", height: 100, overflow: 'hidden' }}>
          <Grid item xs={12} className={classes.circle} />
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={3}>
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
              </Grid>
              <Grid item xs="auto">
                {buttons.map((button) => {
                  return (
                    <IconButton className={classes.whiteText}>
                      {button}
                    </IconButton>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default playground;
