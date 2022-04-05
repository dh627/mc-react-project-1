import { useState } from "react";

const Form = ({ people }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [netWorth, setNetWorth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("PEOPLE ", people);
    const person = { name, job, country, age, netWorth };
    console.log(person);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {/* name, job, country, age, net worth */}
        <div className="form-control">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            required
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="form-control">
          <input
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            required
            value={netWorth}
            onChange={(e) => setNetWorth(e.target.value)}
          />
        </div>

        <button>Add User</button>
      </form>
    </div>
  );
};

export default Form;

// so, I think I can pass my state from app.js into this component and then add my person object to that state.

// https://discuss.codecademy.com/t/child-component-updating-parent-state/605272/2 also this. But if I did this then I think
// it would just set the state to the object that gets made through the form. Therefore I probably need the state/array to
// be passed in so that I can push my newest item onto it and then set the state as the entire array of objects. Either that
// or find a way of pushing another object/item onto the array in the App state.

// I guess I can pass the state/array from my app component into this component, and then I can add to that array/state...
// I think my current code in app.js should just re-render the cards as the array will have changed?

// perhaps could style my form after.
