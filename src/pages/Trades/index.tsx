import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { fetchCurrency } from "store/actions";

import ChatList from "components/ChatsList";
import Chat from "components/Chat";
import ChatDetails from "components/ChatDetails";

import { TradesWrapper } from "./styles";

interface MatchParams {
  chatId: string;
}

interface MapDispatchToProps {
  onFetchCurrency: () => void;
}

type Props = MapDispatchToProps & RouteComponentProps<MatchParams>;

const TradesScreen = (props: Props) => {
  const { onFetchCurrency } = props;
  const chatId = +props.match.params.chatId;

  useEffect(() => {
    onFetchCurrency();
  }, [onFetchCurrency]);

  return (
    <TradesWrapper>
      <ChatList />
      {(chatId || chatId === 0) && <Chat chatId={chatId} />}
      {(chatId || chatId === 0) && <ChatDetails chatId={chatId} />}
    </TradesWrapper>
  );
};

const mapDispatchToProps = {
  onFetchCurrency: fetchCurrency
};

export default connect(
  null,
  mapDispatchToProps
)(TradesScreen);
