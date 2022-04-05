import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "John Mayer",
      job: "Singer",
      country: "USA",
      age: 44,
      netWorth: "40M",
    },
    {
      id: 2,
      name: "Dwayne Johnson",
      country: "USA",
      job: "Actor",
      age: 49,
      netWorth: "320M",
    },
    {
      id: 3,
      name: "Mike Tyson",
      country: "USA",
      job: "Boxer",
      age: 55,
      netWorth: "10M",
    },
  ]);

  const userCards = cards.map((card) => {
    return <Card card={card} />;
  });

  return (
    <div className="container">
      <Form cards={cards} />
      <div className="card-container">{userCards}</div>
    </div>
  );
};

export default App;
