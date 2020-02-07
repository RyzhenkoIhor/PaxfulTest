function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export const generatedState = () => {
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
      sellerAvatarUrl:
        "https://i1.wp.com/lccbrevard.org/wp-content/uploads/2018/12/Empty-Profile-Photo.png?fit=300%2C300&ssl=1",
      userAvatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRokBE5eLVLxW5nVP74_w3JaXNZe4eO-H2OiGdHJ0ds9cGxfekq",
      paymentMethod: i % 2 ? "PayPal" : "Amazon Gift Card",
      respectCount: getRandomInt(40),
      disrespectCount: getRandomInt(40),
      tradeHash: Math.random()
        .toString(36)
        .substring(7),
      amountUSD: 15 * i + 1,
      isUnread: !!(i % 2),
      isPayed: !(i % 2),
      dirtyBy: null,
      readBy: null,
      amountBTC: 0,
      currency: 0,
      messages
    });
  }
  return result;
};
