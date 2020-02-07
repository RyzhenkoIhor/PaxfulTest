import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "components/Navbar";
import { Tabs } from "components/Tabs";
import TradesScreen from "pages/Trades";
import {
  ROOT,
  BUY_BTC,
  SELL_BTC,
  ACCOUNT,
  WALLET,
  SUPPORT,
  OVERVIEW,
  TRADES,
  DISPUTES,
  OFFERS,
  TEAM,
  TRADE_HISTORY
} from "./routes";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path={ROOT} exact />
          <Route path={BUY_BTC} />
          <Route path={`${SELL_BTC}`}>
            <Tabs />
            <Switch>
              <Route path={`${SELL_BTC}${OVERVIEW}`} />
              <Route
                component={TradesScreen}
                exact
                path={`${SELL_BTC}${TRADES}/:chatId`}
              />
              <Route component={TradesScreen} path={`${SELL_BTC}${TRADES}`} />
              <Route path={`${SELL_BTC}${DISPUTES}`} />
              <Route path={`${SELL_BTC}${OFFERS}`} />
              <Route path={`${SELL_BTC}${TEAM}`} />
              <Route path={`${SELL_BTC}${TRADE_HISTORY}`} />
            </Switch>
          </Route>
          <Route path={ACCOUNT} />
          <Route path={WALLET} />
          <Route path={SUPPORT} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
