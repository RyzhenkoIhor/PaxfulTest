import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { green, gray, blueBg } from "stylesConstants/colors";

type CardStatusProps = {
  isPayed?: boolean;
};

type IndicateDotProps = {
  isUnread?: boolean;
};

export const ChatListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: no-wrap;
    overflow-x: auto;
  }
`;

export const ChatCardWrapper = styled(NavLink)`
  display: flex;
  height: 70px;
  border-bottom: 1px solid lightgray;
  justify-content: space-between;
  padding: 15px;
  text-decoration: none;
  color: black;
  &.active {
    background: ${blueBg};
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  @media (max-width: 1280px) {
    display: none;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  color: ${gray};
`;

export const CardMain = styled.span`
  margin-top: 6px;
`;

export const CardFooter = styled.div`
  color: ${gray};
  font-size: 12px;
`;

export const IndicateDot = styled.div<IndicateDotProps>`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: ${props => (props.isUnread ? green : gray)};
  position: absolute;
  left: 0;
  transform: translateX(-12px);
`;

export const CardSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75px;
`;

export const CardStatus = styled.span<CardStatusProps>`
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 5px;
  color: ${props => (props.isPayed ? green : gray)};
`;
