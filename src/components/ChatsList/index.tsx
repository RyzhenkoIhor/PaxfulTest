import React from "react";
import { connect } from "react-redux";

import { RootStore } from "store/reducers";
import { ChatListItemType } from "types/Chats";
import { CurrencyType } from "types/Currency";

import { ChatCard } from "./ChatCard";
import { ChatListWrapper } from "./styles";

interface MapStateToProps {
  chats: ChatListItemType[];
  currency: CurrencyType;
}

const ChatList = (props: MapStateToProps) => (
  <ChatListWrapper>
    {props.chats &&
      props.chats.map(chat => (
        <ChatCard currency={props.currency.currency} data={chat} key={chat.id} />
      ))}
  </ChatListWrapper>
);

function mapStateToProps(state: RootStore): MapStateToProps {
  return { chats: state.chats, currency: state.currency };
}

export default connect<MapStateToProps, {}, {}, RootStore>(mapStateToProps)(
  ChatList
);
