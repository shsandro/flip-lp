import { Grid } from '@material-ui/core';
import React from 'react';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Fade from 'react-reveal/Fade';
import Motive from './Motive';
import Robot from './icons/Robot';
import Analytics from './icons/Analytics';
import Shield from './icons/Shield';

const MotivesGroup = () => (
  <Grid container spacing={6}>
    <Grid item xs={12} sm={6}>
      <Fade right>
        <Motive
          icon={<HeadsetMicIcon fontSize="large" color="primary" />}
          text="
        Gerenciar a jornada do
        seu lead para que ele nunca
        fique sem atendimento.
        "
        />
      </Fade>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Fade right>
        <Motive
          icon={<Robot />}
          text="
          Eliminar controles
          paralelos e automatizar
          tarefas repetitivas.
        "
        />
      </Fade>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Fade right>
        <Motive
          icon={(
            <SentimentVerySatisfiedOutlinedIcon
              fontSize="large"
              color="primary"
            />
            )}
          text="
          Garantir o melhor
          relacionamento com
          o seu cliente.
        "
        />
      </Fade>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Fade right>
        <Motive
          icon={<Shield />}
          text="
          Oferecer a segurança total
          do seu negócio protegendo
          os dados dos seus clientes.
        "
        />
      </Fade>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Fade right>
        <Motive
          icon={<VisibilityOutlinedIcon fontSize="large" color="primary" />}
          text="
          Ter uma visão privilegiada
          através de diversos
          relatórios inteligentes.
        "
        />
      </Fade>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Fade right>
        <Motive
          icon={<Analytics />}
          text="
          Gestionar de forma
          eficiente o financeiro e
          comissionamento.
        "
        />
      </Fade>
    </Grid>
  </Grid>
);

export default MotivesGroup;
