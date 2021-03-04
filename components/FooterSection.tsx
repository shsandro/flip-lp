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
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Fade from "react-reveal/Fade";
import React from "react";
import { goToSignUpType } from "../pages";

type SocialNetworks = {
  icon: React.ReactNode;
  link: string;
  label: string;
};

const socialNetworks: SocialNetworks[] = [
  {
    icon: <FacebookIcon />,
    link: "https://facebook.com/flipcrm",
    label: "Facebook",
  },
  {
    icon: <InstagramIcon />,
    link: "https://instagram.com/crmflip",
    label: "Instagram",
  },
  // { icon: <LinkedInIcon />, link: "https://LinkedIn.com/", label: "LinkedIn" },
  {
    icon: <WhatsAppIcon />,
    link:
      "https://api.whatsapp.com/send?phone=5544998180537&text=Ol%C3%A1%20Andr%C3%A9%2C%20visitei%20a%20sua%20p%C3%A1gina%20e%20gostaria%20de%20entender%20melhor%20como%20eu%20automatizo%20o%20processo%20dos%20meus%20leads",
    label: "WhatsApp",
  },
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
    top: 0,
    zIndex: -1,
  },
  footerBg: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    height: theme.spacing(13),
  },
  imgLogo: {
    marginTop: "0.6%",
  },
}));
const FooterSection = ({ goToSignUp }: goToSignUpType) => {
  const classes = useStyles();
  const theme = useTheme();
  const isCellphone = useMediaQuery(theme.breakpoints.down("xs"));
  const navigateTo = (link: string) => {
    const win = window.open(link, "_blank");
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
                      Clique aqui para entrar em contato através do WhatsApp,
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
                      onClick={() => {
                        navigateTo(
                          "https://api.whatsapp.com/send?phone=5544998180537&text=Ol%C3%A1%20Andr%C3%A9%2C%20visitei%20a%20sua%20p%C3%A1gina%20e%20gostaria%20de%20entender%20melhor%20como%20eu%20automatizo%20o%20processo%20dos%20meus%20leads"
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
      <Box pt={10}>
        <Box className={classes.footerBg} pt={2}>
          <div className={classes.circle} />
          <Container>
            <Grid
              container
              spacing={isCellphone ? 2 : 10}
              justify="center"
              alignItems="center"
            >
              <Grid item xs="auto" sm={6}>
                <Grid
                  container
                  alignItems="center"
                  justify="flex-end"
                  spacing={2}
                >
                  {!isCellphone && (
                    <Grid item sm={2} lg={1} className={classes.imgLogo}>
                      <img src="/flip-logo_branca.svg" />
                    </Grid>
                  )}
                  <Grid item xs={12} sm="auto">
                    <Typography variant="caption" className={classes.whiteText}>
                      Transforme Leads em Clientes!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs="auto" sm={6}>
                {socialNetworks.map((network) => {
                  return (
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
                  );
                })}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </section>
  );
};

export default FooterSection;
