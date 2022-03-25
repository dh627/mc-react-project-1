import { useState } from "react";
import Cards from "./components/Cards";

const App = () => {
  const [cards] = useState([
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

  return (
    <div className="container">
      <Cards cards={cards} />
    </div>
  );
};

export default App;
