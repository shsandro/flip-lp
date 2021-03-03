import React from 'react';
import LuneteBase from './LuneteBase';
import LuneteTop from './LuneteTop';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  topPart:{
    animation: `$vertical-banlance 20000ms ${theme.transitions.easing.easeInOut} infinite`,
    transformOrigin: 'bottom center',
  },
  '@keyframes vertical-banlance': {
    '0%': {
      transform: 'rotate(0deg)'
    },
   
    '90%': {
      transform: 'rotate(-20deg)'
    },

    '100%': {
      transform: 'rotate(0deg)'
    },
  },
}));

const Lunete = (props) => {
  const classes = useStyles();
  const {strokeWidth = 0.20} = props;

  return (
    <div>
      <LuneteTop className={classes.topPart} strokeWidth={strokeWidth}/>
      <LuneteBase strokeWidth={strokeWidth}/>
    </div>
  );
}

export default Lunete;
