import { useState } from "react";
import gymStore from "../../gymStore";
import { CustomTable } from "../styles";
import { TableContent } from "../styles";
import { ThemeButton } from "../styles";
const InstrucCreate = () => {
  const [data, setData] = useState({
    instructor: "",
    classType: "",
    duration: "",
  });
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    gymStore.addInst(data);
    console.log(data);
  };

  return (
    <div>
      <CustomTable>
        <form onSubmit={handleSubmit}>
          <TableContent>
            <p>Add instructor: </p>
            <label> instructor name: </label>
            <input onChange={handleChange} type="text" name="instructor" />
          </TableContent>

          <TableContent>
            <label>Type of the class: </label>
            <input onChange={handleChange} type="text" name="classType" />
          </TableContent>

          <TableContent>
            {" "}
            <label>Duration: </label>
            <input onChange={handleChange} type="text" name="duration" />
          </TableContent>
          <ThemeButton type="submit">Submit</ThemeButton>
        </form>
      </CustomTable>
    </div>
  );
};
export default InstrucCreate;
