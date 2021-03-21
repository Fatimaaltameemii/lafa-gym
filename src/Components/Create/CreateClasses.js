import { useState } from "react";
import gymStore from "../../gymStore";
import { CustomTable } from "../styles";
import { TableContent } from "../styles";
import { ThemeButton } from "../styles";
const ClassesCreate = () => {
  const [data, setData] = useState({
    className: "",
    duration: "",
    timing: "",
  });
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    gymStore.addClass(data);
    console.log(data);
  };

  return (
    <div>
      {" "}
      <CustomTable>
        <form onSubmit={handleSubmit}>
          <TableContent>
            <p>Add a Class: </p>
            <label> Class name:</label>
            <input onChange={handleChange} type="text" name="className" />
          </TableContent>
          <TableContent>
            <label>Duration:</label>
            <input onChange={handleChange} type="text" name="duration" />
          </TableContent>
          <TableContent>
            <label>Class starts at:</label>
            <input onChange={handleChange} type="text" name="timing" />
          </TableContent>
          <ThemeButton type="submit">Submit</ThemeButton>
        </form>
      </CustomTable>
    </div>
  );
};
export default ClassesCreate;
