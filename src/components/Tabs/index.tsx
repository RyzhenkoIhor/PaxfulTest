import React from "react";
import { NavLink } from "react-router-dom";

import {sellBTC, overview, trades, disputes, offers, team, tradeHistory } from "router/routes";

import { TabWrapper } from "./styles";

export const Tabs: React.FC = () => (
    <TabWrapper>
      <NavLink to={`${sellBTC}${overview}`}>Overview</NavLink>
      <NavLink to={`${sellBTC}${trades}`}>Trades</NavLink>
      <NavLink to={`${sellBTC}${disputes}`}>Disputes</NavLink>
      <NavLink to={`${sellBTC}${offers}`}>Your offers</NavLink>
      <NavLink to={`${sellBTC}${team}`}>My team</NavLink>
      <NavLink to={`${sellBTC}${tradeHistory}`}>Trade History</NavLink>
    </TabWrapper>
);
