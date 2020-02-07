import styled from "styled-components";

import { gray, green } from "stylesConstants/colors";

type ColoredSpanProps = {
  isGreen?: boolean;
  isGrey?: boolean;
};

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`;

export const Button = styled.button`
  background-color: ${green};
  border-radius: 20px;
  border: none;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  margin-top: 15px;
  letter-spacing: 1px;
  &:focus {
    outline: 0;
  }
  &:disabled {
    background-color: ${gray};
  }
`;

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
  & > div {
    display: flex;
    flex: 0 49%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    border-bottom: 1px solid ${gray};
    & > span {
      font-size: 12px;
      margin: 5px;
      color: ${gray};
      &:nth-child(1) {
        font-weight: bold;
        text-transform: uppercase;
        color: black;
      }
    }
    &:nth-child(odd) {
      border-right: 1px solid ${gray};
    }
  }
  @media(max-width: 1280px){
    & > div {
      flex: 0 100%;
      &:nth-child(even) {
        border-left: 1px solid ${gray};
      }
      & > span {
      font-size: 14px;
    }
  }
`;

export const SpanWrapper = styled.span`
  & > span {
    margin: 0 4px;
    color: ${green};
    &:nth-child(2) {
      color: red;
    }
  }
`;

export const ColoredSpan = styled.div<ColoredSpanProps>`
  margin: 5px;
  color: ${props => (props.isGreen ? green : props.isGrey ? gray : "black")};
  text-transform: uppercase;
  font-weight: bold;
`;
