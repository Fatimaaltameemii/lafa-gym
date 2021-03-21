import gymStore from "../../gymStore";
import { InfoWrapper, ThemeRemoveButton } from "../styles";
const ClassItem = (props) => {
  const clasInfo = props.clasInfo;

  return (
    <InfoWrapper>
      <p>Class: {clasInfo.className}</p>
      <p>Duration: {clasInfo.duration}</p>
      <p>Time: {clasInfo.timing}</p>
      <ThemeRemoveButton onClick={() => gymStore.removeClass(clasInfo.id)}>
        {" "}
        Remove Class{" "}
      </ThemeRemoveButton>
    </InfoWrapper>
  );
};
export default ClassItem;
