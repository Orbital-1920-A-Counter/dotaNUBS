
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Face';
import { MenuItem } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeroesList from "C:/Users/ASUS/Documents/orbital/dotaNUBS/dotaNUBS/frontend/src/pages/components/list-all-hero";
import get_heroes from 'C:/Users/ASUS/Documents/orbital/dotaNUBS/dotaNUBS/frontend/src/services/get_data';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100%)`,
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Router>
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Home
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            About
          </Typography>
        </MenuItem>
          <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Teams
          </Typography>
        </MenuItem>
            <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Players
          </Typography>
        </MenuItem>
            <MenuItem>
          <Typography variant='h6' className={classes.title}>
          Heroes

          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
    </Router>
  );
}

export default Header


