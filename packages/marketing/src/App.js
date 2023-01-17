import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import { styleProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
    return (
        <div>
            <styleProvider>
                <BrowserRouter>
                 <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route  path="/" component={Landing} />
                 </Switch>
                </BrowserRouter>
            </styleProvider>
        </div>
    )
}