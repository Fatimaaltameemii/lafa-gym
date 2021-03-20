import { useState } from "react";
import gymStore from "../gymStore";
const ClientCreate = () => {
  const [data, setData] = useState({
    clientN: "",
    age: 0,
    weight: 0,
    height: 0,
  });
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.clientN]:
        event.target.clientN === "age"
          ? +event.target.value
          : event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    gymStore.adding(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Client name:</label>
        <input onChange={handleChange} type="text" name="clientN" />

        <label>Client Age:</label>
        <input min="1" onChange={handleChange} type="number" name="age" />

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
