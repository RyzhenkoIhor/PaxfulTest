import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "components/Navbar";
import { Tabs } from "components/Tabs";
import TradesScreen from "pages/Trades";
import {
  root,
  buyBTC,
  sellBTC,
  account,
  wallet,
  support,
  overview,
  trades,
  disputes,
  offers,
  team,
  tradeHistory
} from "./routes";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path={root} exact />
          <Route path={buyBTC} />
          <Route path={`${sellBTC}`}>
            <Tabs />
            <Switch>
              <Route path={`${sellBTC}${overview}`} />
              <Route
                component={TradesScreen}
                exact
                path={`${sellBTC}${trades}/:chatId`}
              />
              <Route component={TradesScreen} path={`${sellBTC}${trades}`} />
              <Route path={`${sellBTC}${disputes}`} />
              <Route path={`${sellBTC}${offers}`} />
              <Route path={`${sellBTC}${team}`} />
              <Route path={`${sellBTC}${tradeHistory}`} />
            </Switch>
          </Route>
          <Route path={account} />
          <Route path={wallet} />
          <Route path={support} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
