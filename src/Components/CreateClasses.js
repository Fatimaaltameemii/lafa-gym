import { useState } from "react";
import gymStore from "../gymStore";
const ClassesCreate = () => {
  const [data, setData] = useState({
    className: "",
    duration: "",
    timing: "",
  });
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.className]:
        event.target.className === "duration"
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
        <label>Add Class name:</label>
        <input onChange={handleChange} type="text" name="className" />
        <label>Duration:</label>
        <input onChange={handleChange} type="text" name="duration" />
        <label>Class starts at:</label>
        <input onChange={handleChange} type="text" name="timing" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ClassesCreate;
