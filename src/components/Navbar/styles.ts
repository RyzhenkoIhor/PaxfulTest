import styled from "styled-components";

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
    height: 100px;
  }
`;

export const Logo = styled.div`
  font-size: 32px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const NavWrapper = styled.nav`
  justify-self: end;
  & > a {
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    margin: 10px 0;
    &.active {
      text-decoration: underline;
    }
  }
  @media (max-width: 568px) {
     display: none;
  }
`;
