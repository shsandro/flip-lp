import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Slide,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useRef, useState } from 'react';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import Reward from 'react-rewards';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  FormValuesType,
  schemaValidator,
  validate,
} from './SignUpFormValidators';
import useFacebookPixel from './useFacebookPixel';

export type UserDataType = {
  email: string;
  name: string;
  phone: string;
  city: string;
};

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    overflow: 'hidden',
    position: 'relative',
  },
  rewardGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.success.light,
    height: '100%',
    width: '100%',
    zIndex: theme.zIndex.tooltip,
    color: theme.palette.common.white,
  },
  errorSubmit: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.warning.light,
    height: '100%',
    width: '100%',
    zIndex: theme.zIndex.tooltip,
    color: theme.palette.common.white,
  },
  iconColor: {
    color: theme.palette.common.white,
  },
  icon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    color: theme.palette.common.white,
  },
  iconButton: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));
const SignUpForm = () => {
  const classes = useStyles();
  const refReward = useRef(null);
  const facebookPixel = useFacebookPixel();

  const [formValues, setFormValues] = useState<FormValuesType | undefined>({
    email: undefined,
    name: undefined,
    city: undefined,
    phone: undefined,
  });

  const [formErrors, setFormErrors] = useState<FormValuesType | undefined>({
    email: undefined,
    name: undefined,
    city: undefined,
    phone: undefined,
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorSubmit, setErrorSubmit] = useState<boolean>(false);
  const [submiting, setSubmiting] = useState<boolean>(false);

  const handleOnChange = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const values = formValues;
    values[field] = e.currentTarget.value;
    setFormValues(values);
  };

  const validateField = (field: string) => {
    const errors = { ...formErrors };
    const errorMessage = schemaValidator[field](formValues[field]);
    errors[field] = errorMessage;
    setFormErrors(errors);
  };

  const submit = async () => {
    setSubmiting(true);
    const {
      email, name, city, phone,
    } = formValues;

    const errors: FormValuesType = validate(
      ['email', 'name', 'city', 'phone'],
      formValues,
    );
    setFormErrors(errors);
    if (
      Object.values(errors).filter((error: string) => error !== undefined)
        .length === 0
    ) {
      const data: UserDataType = {
        email,
        name,
        phone: phone.replace(/\D/g, ''),
        city,
      };

      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      if (responseJson.ok) {
        setSubmitted(true);
        setTimeout(() => {
          refReward.current.rewardMe();
        }, 500);
        facebookPixel.subscribe();
      } else {
        setErrorSubmit(true);
      }
    }
  };

  return (
    <Paper elevation={4} className={classes.paperStyle}>
      <Slide direction="up" in={submitted}>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.rewardGrid}
        >
          <Grid item xs="auto">
            <Grid container justify="center">
              <Grid item xs="auto">
                <Reward
                  ref={refReward}
                  type="confetti"
                  config={{
                    lifetime: 125,
                    angle: 90,
                    decay: 0.91,
                    spread: 50,
                    startVelocity: 35,
                    elementCount: 125,
                    elementSize: 7,
                  }}
                >
                  <ThumbUpAltOutlinedIcon
                    fontSize="large"
                    className={classes.iconColor}
                  />
                </Reward>
              </Grid>
              <Grid item xs={12}>
                <Box p={2}>
                  <Typography component="span" align="center">
                    <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                      Obrigado
                    </Box>
                  </Typography>
                  <Typography align="center">
                    Foi uma decisão inteligente, em breve entraremos em contato
                    para agendar a sua apresentação.
                    <br />
                    Também estamos ansiosos para te conhecer melhor.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Slide>

      <Slide direction="up" in={errorSubmit}>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.errorSubmit}
        >
          <Grid item xs="auto">
            <Grid container justify="center">
              <Grid item xs="auto">
                <SentimentVeryDissatisfiedIcon
                  fontSize="large"
                  className={classes.iconColor}
                />
              </Grid>
              <Grid item xs={12}>
                <Box p={2}>
                  <Typography component="span" align="center">
                    <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                      Oops!
                    </Box>
                  </Typography>
                  <Typography align="center">
                    No momento estamos recebendo muitas requisições e
                    infelizmente não foi possivel finalizar o seu cadastro
                    <br />
                    Tente novamente mais tarde.
                  </Typography>
                  <Typography component="span" align="center">
                    <Box pt={2} fontWeight="fontWeightBold">
                      Não quer esperar?
                      <br />
                      Entre em contato agora mesmo através do WhatsApp!
                    </Box>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs="auto">
                <IconButton
                  onClick={() => {
                    const win = window.open(
                      'https://api.whatsapp.com/send?phone=554499773127&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20da%20Flip%20e%20gostaria%20de%20tirar%20alguma%20d%C3%BAvidas.',
                      '_blank',
                    );
                    win.focus();
                  }}
                  className={classes.iconButton}
                >
                  <WhatsAppIcon className={classes.icon} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Slide>
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography component="span" color="textSecondary" variant="h4">
              <Box fontFamily="Gilroy-ExtraBold">Agendar uma apresentação!</Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Nome"
              error={!!formErrors.name}
              helperText={formErrors.name}
              onChange={(e) => {
                handleOnChange('name', e);
              }}
              onBlur={() => {
                validateField('name');
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Telefone"
              error={!!formErrors.phone}
              helperText={formErrors.phone}
              onChange={(e) => {
                handleOnChange('phone', e);
              }}
              onBlur={() => {
                validateField('phone');
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="E-mail"
              error={!!formErrors.email}
              helperText={formErrors.email}
              onChange={(e) => {
                handleOnChange('email', e);
              }}
              onBlur={() => {
                validateField('email');
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Cidade"
              error={!!formErrors.city}
              helperText={formErrors.city}
              onChange={(e) => {
                handleOnChange('city', e);
              }}
              onBlur={() => {
                validateField('city');
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.wrapper}>
              <Button
                size="large"
                color="primary"
                variant="contained"
                fullWidth
                onClick={submit}
                disabled={submiting}
              >
                Agendar
              </Button>
              {submiting && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default SignUpForm;
