import gymStore from "../../gymStore";
import { InfoWrapper, ThemeRemoveButton } from "../styles";
const ClientItem = (props) => {
  const clyInfo = props.clyInfo;
  return (
    <InfoWrapper>
      <p>Name: {clyInfo.clientN}</p>
      <p>Age: {clyInfo.age} years</p>
      <p>Weight: {clyInfo.weight} Kg</p>
      <p>Height: {clyInfo.height} cm</p>
      <ThemeRemoveButton onClick={() => gymStore.removeClient(clyInfo.id)}>
        {" "}
        Remove Client{" "}
      </ThemeRemoveButton>
    </InfoWrapper>
  );
};
export default ClientItem;
