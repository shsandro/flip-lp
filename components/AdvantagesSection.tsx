import {
  Box,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useEffect } from "react";
import SecondTitle from "./SecondTitle";
import MotivesGroup from "./MotivesGroup";
import Fade from "react-reveal/Fade";
import Hero from "./Hero";

const useStyles = makeStyles((theme) => ({
  contrastText: {
    color: theme.palette.primary.main,
  },
  capa: {
    animation: `$oscill 1s ease-in-out infinite alternate`,
    position: "relative",
    boxShadow: "0 1px grey, 0 -1px gray",
  },
  "@keyframes oscill": {
    "0%": {
      top: "3%",
      transform: "skewX(0deg)",
    },
    "100%": {
      top: "-3%",
      transform: "skewX(10deg)",
    },
  },
  hideScroll: {
    overflow: "unset",
  },
  hero: {
    transform: "scaleX(-1)",
  },
  removeScroll: {
    overflow: "hidden",
  },
}));

const AdvantagesSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.removeScroll}>
      <Container>
        <Box pt={8} pb={8}>
          <Grid container>
            <Hidden smDown>
              <Grid item md>
                <Fade bottom>
                  <Hero classes={{ root: classes.hero }} />
                </Fade>
              </Grid>
            </Hidden>

            <Grid item xs={12} md={7}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3} md={2}>
                  <Fade>
                    <SecondTitle>vantagens</SecondTitle>
                  </Fade>
                </Grid>
                <Grid item xs={12}>
                  <Fade>
                    <Typography variant="h4" color="textSecondary">
                      <Box fontFamily="Gilroy-ExtraBold">
                        Com a Flip{" "}
                        <Box component="span" className={classes.contrastText}>
                          você pode mais!
                        </Box>
                      </Box>
                    </Typography>
                  </Fade>
                </Grid>
                <Grid item xs={12}>
                  <Box pt={4}>
                    <MotivesGroup />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default AdvantagesSection;
