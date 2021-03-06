import React from "react";
import { Switch, Route } from "react-router-dom";

import { Layout } from "../Layout";
import { NotFound } from "../NotFound";
import { Profile } from "../Profile";

const Router = () => {
            // <Route exact path="/profile" component={Profile} />
    return (
        <Switch>
            <Route exact path="/" component={Layout} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/chat/:chatID" component={Layout} />
            <Route component={NotFound} />
        </Switch>
    );
}

export { Router };