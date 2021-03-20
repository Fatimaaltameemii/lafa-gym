import { useState } from "react";
import gymStore from "../gymStore";
const InstrucCreate = () => {
  const [data, setData] = useState({
    instructor: "",
    classType: "",
    duration: "",
  });
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.instructor]:
        event.target.instructor === "classType"
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
        <label>Add instructor name:</label>
        <input onChange={handleChange} type="text" name="instructor" />

        <label>Type of the class:</label>
        <input onChange={handleChange} type="text" name="classType" />

        <label>Duration:</label>
        <input onChange={handleChange} type="text" name="duration" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default InstrucCreate;
