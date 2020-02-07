import React, { useEffect, createRef } from "react";
import { connect } from "react-redux";

import { ChatType, MessageType } from "types/Chat";
import { UserType } from "types/User";

import { RootStore } from "store/reducers";
import { deleteChat, sendMessage, readMessages } from "store/actions";

import {
  ChatWrapper,
  ChatHeaderWrapper,
  ChatBody,
  ChatFooterForm,
  ChatDelete,
  ChatHeader,
  Message,
  MessageBox,
  Time,
  Logo,
  Input,
  SendButton
} from "./styles";

interface MapStateToProps {
  chat: ChatType[];
  user: UserType;
}

interface Props {
  chatId: number;
  chat: ChatType[];
  onChatDelete: (chatId: number) => void;
  onMessageSend: (chatId: number, message: MessageType) => void;
  onReadMessage: (chatId: number, userId: number) => void;
  user: UserType;
}

const Chat = (props: Props) => {
  const {
    chat,
    onChatDelete,
    onMessageSend,
    chatId,
    user,
    onReadMessage
  } = props;
  const inputRef = createRef<HTMLInputElement>();
  const messagesEndRef = createRef<HTMLDivElement>();

  const scrollToBottom = () => {
    messagesEndRef.current!.scrollTo({
      top: messagesEndRef.current!.scrollHeight,
      behavior: "smooth"
    });
  };

  useEffect(
    () => {
      inputRef.current!.value = "";
      messagesEndRef.current!.scrollTo({
        top: messagesEndRef.current!.scrollHeight
      });
    },
    [messagesEndRef, chatId, inputRef]
  );

  const currentChat = chat[chatId];
  useEffect(
    () => {
      onReadMessage(currentChat.id, user.id);
    },
    [user.id, currentChat.id, onReadMessage]
  );

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onMessageSend(chatId, {
      text: inputRef.current!.value,
      timestamp: Date.now(),
      senderId: user.id
    });
    inputRef.current!.value = "";
    scrollToBottom();
  };

  const onDelete = () => {
    onChatDelete(chatId);
  };

  return (
    <ChatWrapper>
      <ChatHeaderWrapper>
        <ChatDelete onClick={onDelete}>
          <i className="fas fa-trash-alt" />
        </ChatDelete>
        <ChatHeader>
          {currentChat.paymentMethod}
          <div>
            {currentChat.sellerName} <span>+{currentChat.respectCount}</span>/
            <span>-{currentChat.disrespectCount}</span>
          </div>
        </ChatHeader>
      </ChatHeaderWrapper>
      <ChatBody ref={messagesEndRef}>
        {currentChat.messages.map((message, key) => {
          const isLeft: boolean = user.id === message.senderId;
          return (
            <MessageBox isLeft={isLeft} key={key}>
              <Logo
                src={
                  message.senderId === 0
                    ? currentChat.userAvatarUrl
                    : currentChat.sellerAvatarUrl
                }
              />
              <Message isLeft={isLeft}>
                {message.text}
                <Time isLeft={isLeft}> {message.timestamp} </Time>
              </Message>
            </MessageBox>
          );
        })}
      </ChatBody>
      <ChatFooterForm onSubmit={onFormSubmit}>
        <Input placeholder="Type your message..." ref={inputRef} />
        <SendButton>Send</SendButton>
      </ChatFooterForm>
    </ChatWrapper>
  );
};

function mapStateToProps(state: RootStore): MapStateToProps {
  return { chat: state.chat, user: state.user };
}

export default connect(
  mapStateToProps,
  {
    onChatDelete: deleteChat,
    onMessageSend: sendMessage,
    onReadMessage: readMessages
  }
)(Chat);
