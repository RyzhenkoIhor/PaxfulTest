import React from "react";
import { connect } from "react-redux";

import { releaseBTC, switchUser } from "store/actions";

import { CurrencyType } from "types/Currency";
import { ChatType } from "types/Chats";
import { UserType } from "types/User";

import { UserAvatar } from "ui";

import {
  DetailsWrapper,
  Button,
  Details,
  SpanWrapper,
  ColoredSpan
} from "./styles";

interface Props {
  chatId: number;
  chats: ChatType[];
  user: UserType;
  onReleaseBTC: (chatId: number) => void;
  onSwitchUser: (id: number) => void;
  currency: CurrencyType;
}

const ChatDetails = (props: Props) => {
  const { chats, chatId, onReleaseBTC, user, onSwitchUser, currency } = props;

  const currentChat = chats[chatId];

  const handleReleaseBTC = () => {
    onReleaseBTC(chatId);
  };

  const handleUserSwitch = () => {
    onSwitchUser(user.id);
  };

  return (
    <DetailsWrapper>
      You are trading with{" "}
      {user.id === currentChat.sellerId ? user.name : currentChat.sellerName}
      <span>started 21 min ago</span>
      <Button disabled={currentChat.isPayed} onClick={handleReleaseBTC}>
        Release bitcoins
      </Button>
      <Details>
        <div>
          <UserAvatar src={currentChat.sellerAvatarUrl} />
          <SpanWrapper>
            <span>+{currentChat.respectCount}</span>/
            <span>-{currentChat.disrespectCount}</span>
          </SpanWrapper>
        </div>
        <div>
          <span># of trades</span>
          <ColoredSpan>{chats.length}</ColoredSpan>
        </div>
        <div>
          <span>trade status</span>
          <ColoredSpan isGreen={currentChat.isPayed} isGrey={true}>
            {currentChat.isPayed ? "Paid" : "Not Paid"}
          </ColoredSpan>
        </div>
        <div>
          <span>trade hash</span>
          <span>{currentChat.tradeHash}</span>
        </div>
        <div>
          <span>Amount usd</span>
          <span>{currentChat.amountUSD}</span>
        </div>
        <div>
          <span>Amount BTC</span>
          <span>{currentChat.amountUSD / currency.currency}</span>
        </div>
      </Details>
      <Button onClick={handleUserSwitch}>Switch User</Button>
    </DetailsWrapper>
  );
};

export default connect(
  null,
  { onReleaseBTC: releaseBTC, onSwitchUser: switchUser }
)(ChatDetails);
