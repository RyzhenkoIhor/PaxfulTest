import styled from "styled-components";
import { UserAvatar } from "ui";
import {
  blueBg,
  gray,
  green,
  sendedMessageBg,
  receivedMessageBg
} from "stylesConstants/colors";

type MessageProps = {
  isLeft?: boolean;
};

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 80vh;
  padding: 15px;
  justify-content: space-between;
  background-color: ${blueBg};
  box-shadow: inset 0 1px 10px rgba(0, 0, 0, 0.15);
    @media (max-width: 768px) {
    min-height: 50vh;
  }
`;

export const ChatHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  border-bottom: 1px solid lightgray;
  margin: -15px 10px 0 10px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ChatDelete = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  & > i {
    font-size: 14px;
  }
  &:hover {
    background: ${gray};
    & > i {
      color: white;
    }
  }
`;

export const ChatHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    color: ${gray};
    margin-top: 5px;
    & > span {
      color: ${green};
      &:nth-child(2) {
        color: red;
      }
    }
  }
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 60vh;
  padding-bottom: 10px;
  clear: both;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

export const MessageBox = styled.div<MessageProps>`
  display: flex;
  flex-direction: ${props => (props.isLeft ? "row" : "row-reverse")};
`;

export const Logo = styled(UserAvatar)`
  margin-top: 10px;
`;

export const Message = styled.div<MessageProps>`
  padding: 15px;
  position: relative;
  min-width: 60%;
  border-radius: 3px;
  border: 1px solid ${gray};
  margin: 10px;
  width: fit-content;
  background-color: ${props =>
    props.isLeft ? receivedMessageBg : sendedMessageBg};
  color: ${props => (props.isLeft ? "black" : "white")};
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
    top: 25px;
    ${props =>
      props.isLeft
        ? "left: 0;" +
          "transform: translate(-100%, -50%);" +
          "border-style: solid;" +
          "border-width: 3.5px 6.1px 3.5px 0;" +
          `border-color: transparent ${gray} transparent transparent;`
        : "right: 0;" +
          "transform: translate(100%, -50%);" +
          "border-style: solid;" +
          "border-width: 3.5px 0 3.5px 6.1px;" +
          `border-color: transparent transparent transparent ${gray};`}
  }
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
    top: 25px;
    ${props =>
      props.isLeft
        ? "left: 0.8px;" +
          "transform: translate(-100%, -50%);" +
          "border-style: solid;" +
          "border-width: 3px 5.2px 3px 0;" +
          `border-color: transparent ${receivedMessageBg} transparent transparent;`
        : "right: 0.8px;" +
          "transform: translate(100%, -50%);" +
          "border-style: solid;" +
          "border-width: 3px 0 3px 5.2px;" +
          `border-color: transparent transparent transparent ${sendedMessageBg};`}
  }
  }
`;

export const Time = styled.div<MessageProps>`
  font-size: 12px;
  position: absolute;
  color: ${gray};
  bottom: -15px;
  ${props => (props.isLeft ? "left: 20px" : "right: 20px")};
`;

export const ChatFooterForm = styled.form`
  margin-top: auto;
  display: flex;
  align-items: center;
  background-color: white;
  height: 60px;
`;

export const Input = styled.input`
  width: 85%;
  margin-left: 60px;
  border: none;
  &:focus {
    outline: 0;
  }
`;

export const SendButton = styled.button`
  margin: 0 10px 0 auto;
  padding: 10px;
  background-color: transparent;
  border: none;
  color: ${green};
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;
