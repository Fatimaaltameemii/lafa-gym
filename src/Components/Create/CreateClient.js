import { useState } from "react";
import gymStore from "../../gymStore";
import { CustomTable } from "../styles";
import { TableContent } from "../styles";
import { ThemeButton } from "../styles";
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
      <CustomTable>
        <form onSubmit={handleSubmit}>
          <TableContent>
            <p>Add Client: </p>
            <label>Client name:</label>
            <input onChange={handleChange} type="text" name="clientN" />
          </TableContent>

          <TableContent>
            <label>Client Age:</label>
            <input min="16" onChange={handleChange} type="number" name="age" />
          </TableContent>

          <TableContent>
            <label>Client weight:</label>
            <input
              min="1"
              onChange={handleChange}
              type="number"
              name="weight"
            />
          </TableContent>

          <TableContent>
            <label>Client height:</label>
            <input
              min="1"
              onChange={handleChange}
              type="number"
              name="height"
            />
          </TableContent>
          <ThemeButton type="submit">Submit</ThemeButton>
        </form>
      </CustomTable>
    </div>
  );
};
export default ClientCreate;
