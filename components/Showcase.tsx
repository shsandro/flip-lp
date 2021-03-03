import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import Fade from 'react-reveal/Fade';
import Gears from "../components/Gears";

const useStyles = makeStyles((theme) => ({
  gridImage: {
    position: "relative",
    marginLeft: "-15%",
    top: -1,
  },
  contrastText: {
    color: theme.palette.primary.main,
  },
  textSize: {
    fontSize: "21px",
  },
  fullHeight: {
    flex: "1 0 auto",
  },
  gears: {
    position: "absolute",
    marginTop: "-85%",
    zIndex: -1,
    transform: "rotate(4deg)",
  },
  flexContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-30%",
    },
  },
  imgSize: {
    width: "140%",
    objectFit: "cover",
    [theme.breakpoints.up("xl")]: {
      width: "150%",
    },
  },
}));

const Showcase = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <section>
      <Container>
        <Box pb={6}>
          <Grid container direction={isDownMd ? "column-reverse" : "row"}>
            <Grid item sm={12} md={5} className={classes.flexContainer}>
              <Grid
                container
                alignContent="space-between"
                className={classes.fullHeight}
              >
                <Grid item xs={3} sm={2} md={3}>
                  <Box pt={6}>
                    <img src="/flip-logo.svg" width="100%" />
                  </Box>
                </Grid>
                <Grid item md={10}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Typography variant="h3" color="textSecondary">
                        <Box fontFamily="Gilroy-ExtraBold" pt={6}>
                          Transforme
                          <br />
                          leads em{" "}
                          <Box
                            component="span"
                            className={classes.contrastText}
                          >
                            clientes!
                          </Box>
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        color="textSecondary"
                        className={classes.textSize}
                      >
                        Nós temos a fórmula para manter o seu lead aquecido e o
                        corretor comprometido, e o melhor... tudo em uma só
                        plataforma
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        fullWidth
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
                  <img
                    alt="background"
                    src="/session-one-wallpaper.png"
                    className={classes.imgSize}
                  />
                </Grid>
                <Grid item xs={4} style={{ position: "relative" }}>
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

export default Showcase;
