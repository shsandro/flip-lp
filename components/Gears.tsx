import { makeStyles } from '@material-ui/core';
import React from 'react';
import Gear from './Gear';

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    alignItems: 'flex-end',
  },
  gearClockWise:{    
    animation: `$rotateClockWise 20000ms ${theme.transitions.easing.easeInOut} infinite`,    
  },
  gearAntclockWise:{
    width: '60%',
    marginLeft: '-5%',
    animation: `$rotateAntclockWise 20000ms ${theme.transitions.easing.easeInOut} infinite`,    
  },
  '@keyframes rotateClockWise': {
    '0%': {
      transform: 'rotate(0deg)'
    },   

    '20%': {
      transform: 'rotate(340deg)'
    },
    
    '100%': {
      transform: 'rotate(360deg)'
    },
  },
  '@keyframes rotateAntclockWise': {
    '0%': {
      transform: 'rotate(0deg)'
    },   

    '20%': {
      transform: 'rotate(-340deg)'
    },
    
    '100%': {
      transform: 'rotate(-360deg)'
    },
  },
}));

const Gears = (props) => {
  const classes = useStyles();
  const {strokeWidth = 0.20} = props;
  return (
    <div className={classes.root}>
      <Gear className={classes.gearClockWise} strokeWidth={strokeWidth} />
      <Gear className={classes.gearAntclockWise} strokeWidth={strokeWidth * 1.6} />      
    </div>
  );
}

export default Gears;
