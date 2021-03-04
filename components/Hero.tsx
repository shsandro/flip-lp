import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  hero: {
    position: 'absolute',
  },
  cover: {
    position: 'absolute',
    animation: `$wave 20s ${theme.transitions.easing.easeInOut} infinite`,
    transformOrigin: 'top left',
  },

  '@keyframes wave': {
    '0%': {
      transform: 'skew(0, 0) rotate(0)',

    },
    '50%': {
      transform: 'skew(1deg, 5deg)  rotate(-3deg)',
    },

    '100%': {
      transform: 'skew(0, 0)   rotate(0deg)',
    },
  },

}));

type HeroProps = {
  classes?: any,
};
const Hero = (props:HeroProps) => {
  const { classes } = props;

  const internalClasses = useStyles();
  return (
    <div className={clsx(internalClasses.root, classes?.root)}>
      <img src="./hero-cover.svg" className={internalClasses.cover} />
      <img src="./hero.svg" className={internalClasses.hero} />
    </div>
  );
};

export default Hero;
