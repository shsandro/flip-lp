import { Grid } from "@material-ui/core";
import React from "react";
import Motive from "../components/Motive";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Robot from "../components/icons/Robot";
import Analytics from "../components/icons/Analytics";
import Shield from "../components/icons/Shield";
import Fade from "react-reveal/Fade";

const MotivesGroup = () => {
  return (
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
            icon={
              <SentimentVerySatisfiedOutlinedIcon
                fontSize="large"
                color="primary"
              />
            }
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
};

export default MotivesGroup;
