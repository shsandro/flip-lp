import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Lunete from "./Lunete";
import SecondTitle from "./SecondTitle";
import Fade from "react-reveal/Fade";
import SignUpForm from "./SignUpForm";

const useStyles = makeStyles((theme) => ({
  contrastText: {
    color: theme.palette.primary.main,
  },
  textSize: {
    fontSize: "21px",
  },
  luneta: {
    width: "65%",
    position: "absolute",
    bottom: 20,
    left: "-60%",
    zIndex: -1,
    [theme.breakpoints.down('xs')]: {
      width: 0,
    }
  },
  lunetaHolder: {
    position: "relative",
    zIndex: 0,
  },
  logo: {
    position: "absolute",
    top: "-5%",
    left: "-7%",
    zIndex: -1,
    [theme.breakpoints.down('xs')]: {
      width: 0,
    }
  },
  bg: {
    background: theme.palette.grey[100],
  },
}));

const SignUpSection = () => {
  const classes = useStyles();
  return (
    <section id="signup-section" className={classes.bg}>
      <Container>
        <Box pt={8} pb={8}>
          <Grid container justify="space-between" alignItems="center" spacing={3}>
            <Grid item sm={5}>
              <Grid container spacing={3}>
                <Grid item xs={7} sm={6} md={4}>
                  <Fade left>
                    <SecondTitle>descubra</SecondTitle>
                  </Fade>
                </Grid>

                <Grid item xs={12}>
                  <Fade left>
                    <Typography variant="h3" color="textSecondary">
                      <Box fontFamily="Gilroy-ExtraBold">
                        Quer saber como convertemos leads em{" "}
                        <Box component="span" className={classes.contrastText}>
                          clientes?
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
                      Entenda o que nossa fórmula pode fazer pela sua
                      imobiliária.
                    </Typography>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Grid container className={classes.lunetaHolder}>
                <Grid item xs={12}>
                  <Fade>
                    <div className={classes.logo}>
                      <img alt="logo" src="/flip-logotipo.svg" width="75%" />
                    </div>
                  </Fade>
                  <Fade right>
                    <SignUpForm />
                  </Fade>
                  <Fade>
                    <div className={classes.luneta}>
                      <Lunete />
                    </div>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default SignUpSection;
