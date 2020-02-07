import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { fetchCurrency } from "store/actions";

import ChatList from "components/ChatsList";
import Chat from "components/Chat";
import ChatDetails from "components/ChatDetails";

import { TradesWrapper } from "./styles";
import { RootStore } from "store/reducers";
import { ChatType } from "types/Chats";
import { CurrencyType } from "types/Currency";
import { UserType } from "types/User";

interface MatchParams {
  chatId: string;
}

interface MapDispatchToProps {
  onFetchCurrency: () => void;
}

interface MapStateToProps {
  chats: ChatType[];
  currency: CurrencyType;
  user: UserType;
}

type Props = MapStateToProps &
  MapDispatchToProps &
  RouteComponentProps<MatchParams>;

const TradesScreen = (props: Props) => {
  const { onFetchCurrency, chats, currency, user } = props;
  const chatId = +props.match.params.chatId;

  useEffect(
    () => {
      onFetchCurrency();
    },
    [onFetchCurrency]
  );

  return (
    <TradesWrapper>
      <ChatList chats={chats} currency={currency} />
      {(chatId || chatId === 0) && (
        <Chat chatId={chatId} chats={chats} user={user} />
      )}
      {(chatId || chatId === 0) && (
        <ChatDetails
          chatId={chatId}
          chats={chats}
          currency={currency}
          user={user}
        />
      )}
    </TradesWrapper>
  );
};

const mapDispatchToProps = {
  onFetchCurrency: fetchCurrency
};

function mapStateToProps(state: RootStore): MapStateToProps {
  return { chats: state.chats, currency: state.currency, user: state.user };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradesScreen);
