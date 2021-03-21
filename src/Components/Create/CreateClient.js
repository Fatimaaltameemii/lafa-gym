import { useState } from "react";
import gymStore from "../../gymStore";
const ClientCreate = () => {
  const [data, setData] = useState({
    clientN: "",
    age: null,
    weight: null,
    height: null,
  });
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]:
        event.target.name === "age" ||
        event.target.name === "weight" ||
        event.target.name === "height"
          ? +event.target.value
          : event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    gymStore.addClient(data);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Client name:</label>
        <input onChange={handleChange} type="text" name="clientN" />

        <label>Client Age:</label>
        <input min="16" onChange={handleChange} type="number" name="age" />

        <label>Client weight:</label>
        <input min="1" onChange={handleChange} type="number" name="weight" />

        <label>Client height:</label>
        <input min="1" onChange={handleChange} type="number" name="height" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ClientCreate;
