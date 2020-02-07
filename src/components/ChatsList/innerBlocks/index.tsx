import React from "react";

import { UserAvatar } from "ui";
import { ChatType } from "types/Chats";

import { SELL_BTC, TRADES } from "router/routes";

import {
  ChatCardWrapper,
  CardBody,
  CardSide,
  CardStatus,
  CardHeader,
  IndicateDot,
  CardMain,
  CardFooter
} from "../styles";

interface Props {
  data: ChatType;
  currency: number;
}

export const ChatCard = ({ data, currency }: Props) => (
  <ChatCardWrapper to={`${SELL_BTC}${TRADES}/${data.id}`}>
    <CardBody>
      <CardHeader>
        <IndicateDot isUnread={data.isUnread} />
        {`${data.sellerName} is selling`}
      </CardHeader>
      <CardMain>{data.paymentMethod}</CardMain>
      <CardFooter>
        {data.amountUSD} ({data.amountUSD / currency} BTC)
      </CardFooter>
    </CardBody>
    <CardSide>
      <UserAvatar src={data.sellerAvatarUrl} />
      <CardStatus isPayed={data.isPayed}>
        {data.isPayed ? "Paid" : "not paid"}
      </CardStatus>
    </CardSide>
  </ChatCardWrapper>
);
