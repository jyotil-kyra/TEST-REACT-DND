import React, { useState, useCallback, Fragment } from "react";
import Card from "./Card";
import update from "immutability-helper";
const style = {
  width: 400
};
const Container = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Write a cool JS library",
      src:
        "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02"
    },
    {
      id: 2,
      text: "Make it generic enough",
      src: "https://source.unsplash.com/random"
    },
    {
      id: 3,
      text: "Write README",
      src: "https://source.unsplash.com/random"
    },
    {
      id: 4,
      text: "Create some examples",
      src: "https://source.unsplash.com/random"
    }
  ]);
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        })
      );
    },
    [cards]
  );
  return (
    <Fragment>
      <div style={style}>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            src={card.src}
            text={card.text}
            moveCard={moveCard}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Container;
