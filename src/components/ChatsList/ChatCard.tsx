import React from "react";

import {UserAvatar} from 'ui';
import { ChatListItemType } from "types/Chats";

import {sellBTC, trades} from 'router/routes';

import {
  ChatCardWrapper,
  CardBody,
  CardSide,
  CardStatus,
  CardHeader,
  IndicateDot,
  CardMain,
  CardFooter
} from "./styles";

interface Props {
  data: ChatListItemType;
  currency: number;
}

export const ChatCard = ({data, currency}:Props) => (
  <ChatCardWrapper to={`${sellBTC}${trades}/${data.id}`}>
    <CardBody>
      <CardHeader>
        <IndicateDot isUnread={data.isUnread} />
        {`${data.sellerName} is selling`}
      </CardHeader>
      <CardMain>{data.paymentMethod}</CardMain>
      <CardFooter>{data.amountUSD} ({data.amountUSD/currency} BTC)</CardFooter>
    </CardBody>
    <CardSide>
      <UserAvatar src={data.sellerAvatarUrl} />
      <CardStatus isPayed={data.isPayed}>{data.isPayed ? 'Paid' : 'not paid'}</CardStatus>
    </CardSide>
  </ChatCardWrapper>
);
