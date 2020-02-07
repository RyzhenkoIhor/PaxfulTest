import React from "react";
import { connect } from "react-redux";

import { RootStore } from "store/reducers";
import { releaseBTC, switchUser } from "store/actions";

import { CurrencyType } from "types/Currency";
import { ChatType } from "types/Chat";
import { UserType } from "types/User";

import { UserAvatar } from "ui";

import {
  DetailsWrapper,
  Button,
  Details,
  SpanWrapper,
  ColoredSpan
} from "./styles";

interface MapStateToProps {
  chat: ChatType[];
  user: UserType;
  currency: CurrencyType;
}

interface Props {
  chatId: number;
  chat: ChatType[];
  user: UserType;
  onReleaseBTC: (chatId: number) => void;
  onSwitchUser: (id: number) => void;
  currency: CurrencyType;
}

const ChatDetails = (props: Props) => {
  const { chat, chatId, onReleaseBTC, user, onSwitchUser, currency } = props;

  const currentChat = chat[chatId];

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
          <ColoredSpan>{chat.length}</ColoredSpan>
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
          <span>{currentChat.amountUSD/currency.currency}</span>
        </div>
      </Details>
      <Button onClick={handleUserSwitch}>Switch User</Button>
    </DetailsWrapper>
  );
};

function mapStateToProps(state: RootStore): MapStateToProps {
  return { chat: state.chat, user: state.user, currency: state.currency };
}

export default connect(
  mapStateToProps,
  { onReleaseBTC: releaseBTC, onSwitchUser: switchUser }
)(ChatDetails);
