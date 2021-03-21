import { observer } from "mobx-react";
import gymStore from "../../gymStore";
import { InfoWrapper, ThemeRemoveButton } from "../styles";

const InstItem = (props) => {
  const instroInfo = props.instroInfo;
  return (
    <InfoWrapper>
      <p> Name: {instroInfo.instructor}</p>
      <p> Class: {instroInfo.classType}</p>
      <p> Duration: {instroInfo.duration}</p>
      <ThemeRemoveButton onClick={() => gymStore.removeInst(instroInfo.id)}>
        {" "}
        Remove Instructor{" "}
      </ThemeRemoveButton>
    </InfoWrapper>
  );
};
export default observer(InstItem);
