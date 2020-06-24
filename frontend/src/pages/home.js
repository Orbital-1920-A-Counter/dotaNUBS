import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import easy from './assets/easy.png';
import free from './assets/free.png';
import effective from './assets/effective.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
