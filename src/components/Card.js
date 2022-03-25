export const Card = ({ card }) => {
  console.log(card);
  return (
    <div className="card">
      <h2>{card.name}</h2>
      {/* todo: add property names dynamically */}
      <p>
        <span>Job:</span> {card.job}
      </p>
      <p>
        <span>Country: </span> {card.country}
      </p>
      <p>
        <span>Age: </span> {card.age}
      </p>
      <p>
        <span>Net Worth: </span> {card.netWorth}
      </p>
    </div>
  );
};

export default Card;
