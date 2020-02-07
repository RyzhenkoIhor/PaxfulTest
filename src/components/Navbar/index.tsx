import React from "react";
import { NavLink } from "react-router-dom";

import { buyBTC, sellBTC, account, support, wallet } from "router/routes";

import { HeaderWrapper, Logo, NavWrapper } from "./styles";

export const Navbar: React.FC = () => (
  <HeaderWrapper>
    <Logo>paxful</Logo>
    <NavWrapper>
      <NavLink to={buyBTC}>Buy bitcoins</NavLink>
      <NavLink to={sellBTC}>Sell bitcoins</NavLink>
      <NavLink to={wallet}>Wallet</NavLink>
      <NavLink to={support}>Support</NavLink>
      <NavLink to={account}>Your account</NavLink>
    </NavWrapper>
  </HeaderWrapper>
);
