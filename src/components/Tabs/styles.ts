import styled from "styled-components";
import { blueBg } from "stylesConstants/colors";

export const TabWrapper = styled.nav`
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  align-items: stretch;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  & > a {
    display: flex;
    align-items: center;
    border-right: 1px solid lightgray;
    font-size: 14px;
    text-decoration: none;
    color: #000;
    padding: 0 15px;
    &:nth-child(1) {
      border-left: 1px solid lightgray;
    }
    &.active {
      background-color: ${blueBg};
    }
  }

  @media (max-width: 568px) {
    flex-wrap: wrap;
    align-items: stretch;
    padding-left: 0;
    & > a {
      flex-grow: 1;
      padding: 5px 0;
      width: 32%;
      justify-content: center;
      border: none;
    }
  }
`;
