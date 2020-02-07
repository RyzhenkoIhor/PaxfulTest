import React from "react";

import { ChatType } from "types/Chats";
import { CurrencyType } from "types/Currency";

import { ChatCard } from "./innerBlocks";
import { ChatListWrapper } from "./styles";

interface Props {
  chats: ChatType[];
  currency: CurrencyType;
}

const ChatList = (props: Props) => (
  <ChatListWrapper>
    {props.chats &&
      props.chats.map(chat => (
        <ChatCard
          currency={props.currency.currency}
          data={chat}
          key={chat.id}
        />
      ))}
  </ChatListWrapper>
);

export default ChatList;
