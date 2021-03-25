import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import HomeIcon from '@material-ui/icons/Home';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

class _Header extends Component {
    render() {
        return <>
        <CssBaseline />
        <AppBar position="relative">
        <Toolbar>
            <NavLink to="/" activeClassName="selectedHeader">
                <HomeIcon />
                На главную
            </NavLink>
            <NavLink to="/profile" activeClassName="selectedHeader">
                <EmojiEmotionsIcon />
                {this.props.name}
            </NavLink>
        </Toolbar>
        </AppBar>
        </>;
    }
};

const mapStateToProps = (state) => {
    return {
        name: state.profile.name,
    }
};

const Header = connect(mapStateToProps, { })(_Header);

export { Header };