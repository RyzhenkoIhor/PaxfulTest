import React from "react";
import {Link, NavLink} from "react-router-dom";

import { ROOT, BUY_BTC, SELL_BTC, ACCOUNT, SUPPORT, WALLET } from "router/routes";

import { HeaderWrapper, Logo, NavWrapper } from "./styles";

export const Navbar: React.FC = () => (
  <HeaderWrapper>
    <Logo to={ROOT}>paxful</Logo>
    <NavWrapper>
      <NavLink to={BUY_BTC}>Buy bitcoins</NavLink>
      <NavLink to={SELL_BTC}>Sell bitcoins</NavLink>
      <NavLink to={WALLET}>Wallet</NavLink>
      <NavLink to={SUPPORT}>Support</NavLink>
      <NavLink to={ACCOUNT}>Your ACCOUNT</NavLink>
    </NavWrapper>
  </HeaderWrapper>
);
