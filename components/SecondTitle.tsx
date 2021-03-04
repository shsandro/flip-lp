import { makeStyles, Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import React from 'react';

export type SecondTitleProps = {
  children: string,
};

const useStyles = makeStyles((theme) => ({
  secondTitle: {
    color: pink[500],
    backgroundColor: pink[50],
    borderRadius: theme.spacing(8),
    textTransform: 'uppercase',
  },
}));

const SecondTitle = ({ children }:SecondTitleProps) => {
  const classes = useStyles();
  return (
    <div className={classes.secondTitle}>
      <Typography align="center">{children}</Typography>
    </div>
  );
};

export default SecondTitle;
