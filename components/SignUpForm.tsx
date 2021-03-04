import { Box, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";

const SignUpForm = () => {
  return (
    <Paper elevation={4}>
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="h4">
              <Box fontFamily="Gilroy-ExtraBold">Agendar uma apresentação!</Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" fullWidth label="Nome" />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" fullWidth label="Telefone" />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" fullWidth label="E-mail" />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" fullWidth label="Cidade" />
          </Grid>
          <Grid item xs={12}>
              <Button size="large" color="primary" variant="contained" fullWidth>
                  Agendar
              </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default SignUpForm;
