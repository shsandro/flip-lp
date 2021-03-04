import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LuneteBase from './LuneteBase';
import LuneteTop from './LuneteTop';

const useStyles = makeStyles((theme) => ({
  topPart: {
    animation: `$vertical-banlance 20000ms ${theme.transitions.easing.easeInOut} infinite`,
    transformOrigin: 'bottom center',
  },
  '@keyframes vertical-banlance': {
    '0%': {
      transform: 'rotate(0deg)',
    },

    '90%': {
      transform: 'rotate(-20deg)',
    },

    '100%': {
      transform: 'rotate(0deg)',
    },
  },
}));

type LuneteProps = {
  strokeWidth: number,
};

const Lunete = (props:LuneteProps) => {
  const classes = useStyles();
  const { strokeWidth = 0.20 } = props;

  return (
    <div>
      <LuneteTop className={classes.topPart} strokeWidth={strokeWidth} />
      <LuneteBase strokeWidth={strokeWidth} />
    </div>
  );
};

export default Lunete;
