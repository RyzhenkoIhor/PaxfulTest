import { SEND_MESSAGE, RELEASE_BTC} from "../actions/types";
import { ChatType } from "types/Chat";

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

const generatedChatState = () => {
  const result = [];
  for (let i = 0; i < 5; i++) {
    const messages = [];

    for (let i = 1; i < 5; i++) {
      messages.push({
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium cum, facilis minus molestias necessitatibus perferendis perspiciatis? Accusantium animi culpa facere, inventore, ipsa iste minus odio quasi quod, tenetur voluptates!",
        timestamp: Date.now(),
        senderId: i % 2 ? 0 : 1
      });
    }
    result.push({
      id: i,
      sellerId: 1,
      sellerName: "Aron",
      userAvatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRokBE5eLVLxW5nVP74_w3JaXNZe4eO-H2OiGdHJ0ds9cGxfekq",
      sellerAvatarUrl:
        "https://i1.wp.com/lccbrevard.org/wp-content/uploads/2018/12/Empty-Profile-Photo.png?fit=300%2C300&ssl=1",
      paymentMethod: i % 2 ? "PayPal" : "Amazon Gift Card",
      respectCount: getRandomInt(40),
      disrespectCount: getRandomInt(40),
      tradeHash: Math.random()
        .toString(36)
        .substring(7),
      isPayed: !(i % 2),
      amountUSD: 15 * i + 1,
      amountBTC: 0,
      currency: 0,
      messages
    });
  }
  return result;
};

const initialChatState = generatedChatState();

export default function(
  state: ChatType[] = initialChatState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case SEND_MESSAGE:
      return state.map(chat => {
        if (chat.id === action.payload.id) {
          return {
            ...chat,
            messages: [...chat.messages, action.payload.message]
          };
        }
        return chat;
      });
    case RELEASE_BTC:
      return state.map(chat => {
        if (chat.id === action.payload) {
          return {
            ...chat,
            isPayed: true
          };
        }
        return chat;
      });
    default:
      return state;
  }
}
