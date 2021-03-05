import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
        <Typography variant="h6" noWrap>
            Мои чаты
        </Typography>
      </Toolbar>
    </AppBar>
    </>;
};

export { Header };