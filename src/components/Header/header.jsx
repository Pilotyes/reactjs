import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import HomeIcon from '@material-ui/icons/Home';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    appBar: {
        //width: `calc(100% - ${drawerWidth}px)`,
    },
}));
  
function Header() {
    const classes = useStyles();

    return <>
    <CssBaseline />
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        <NavLink to="/" activeClassName="selectedHeader">
            <HomeIcon />
            На главную
        </NavLink>
        <NavLink to="/profile" activeClassName="selectedHeader">
            <EmojiEmotionsIcon />
            Профиль
        </NavLink>
      </Toolbar>
    </AppBar>
    </>;
};

export { Header };