import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  display: flex;
  height: 60px;
  background-color: #30364e;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 20px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 568px) {
    height: 120px;
    flex-direction: column;
  }
`;

export const Logo = styled(Link)`
  font-size: 32px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 568px) {
    margin-top: 5px;
  }
`;

export const NavWrapper = styled.nav`
  justify-self: end;
  & > a {
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    padding: 10px;
    &.active {
      text-decoration: underline;
    }
  }
  @media (max-width: 568px) {
    justify-self: unset;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    & > a {
      flex-grow: 1;
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;
