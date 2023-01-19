import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";


const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/Dashboard"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setisSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignedOut={() => setisSignedIn(false)} isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" >
              <AuthLazy onSignIn={() => setisSignedIn(true)} />
            </Route>
            <Route path="/dashboard" component={DashboardLazy} />
            <Route path="/" component={MarketingLazy} />
          </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
