import React from "react";
import { NavLink } from "react-router-dom";

import {
  SELL_BTC,
  OVERVIEW,
  TRADES,
  DISPUTES,
  OFFERS,
  TEAM,
  TRADE_HISTORY
} from "router/routes";

import { TabWrapper } from "./styles";

export const Tabs: React.FC = () => (
  <TabWrapper>
    <NavLink to={`${SELL_BTC}${OVERVIEW}`}>Overview</NavLink>
    <NavLink to={`${SELL_BTC}${TRADES}`}>Trades</NavLink>
    <NavLink to={`${SELL_BTC}${DISPUTES}`}>Disputes</NavLink>
    <NavLink to={`${SELL_BTC}${OFFERS}`}>Your offers</NavLink>
    <NavLink to={`${SELL_BTC}${TEAM}`}>My team</NavLink>
    <NavLink to={`${SELL_BTC}${TRADE_HISTORY}`}>Trade History</NavLink>
  </TabWrapper>
);
