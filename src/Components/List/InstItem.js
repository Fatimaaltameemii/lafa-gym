import { observer } from "mobx-react";
import gymStore from "../../gymStore";

const InstItem = (props) => {
  const instroInfo = props.instroInfo;
  return (
    <div>
      <p> Name: {instroInfo.instructor}</p>
      <p> Class: {instroInfo.classType}</p>
      <p> Duration: {instroInfo.duration}</p>
      <button onClick={() => gymStore.removeInst(instroInfo.id)}>
        {" "}
        Remove Instructor{" "}
      </button>
    </div>
  );
};
export default observer(InstItem);
